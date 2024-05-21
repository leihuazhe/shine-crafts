"use client"
import { language2voices, Voice } from "@/lib/lang_constants";
import { useEffect, useState } from "react";
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import '../../../styles/audio-player.css';
import { DownloadIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import LangBox from "@/components/tts/lang-box";
import VoiceOption from "@/components/tts/voice-option";
import Button from "@/components/tts/button";
import { toast, useToast } from "@/components/ui/use-toast";
import VoiceOptionV2 from "@/components/tts/voice-option-v2";

const TTS = () => {
  // why is it loading twice? NOT: why is loading this twice.
  console.log("load the tts");
  const [language, setLanguage] = useState('English');
  const [voice, setVoice] = useState<Voice[]>(language2voices[language]);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  //chunk
  const [audioUrl, setAudioUrl] = useState('');

  useEffect(() => {
    setVoice([language2voices[language][0]]);
    setAudioUrl('');
  }, [language]);


  const selectChangeHandler = (newVoice: Voice) => {
    setVoice([newVoice]);
    setAudioUrl('');
  };

  const inputChangeHandler = (event: any) => {
    setText(event.target.value);
    // setAudioUrl('');
  };

  const clickHandler = async () => {
    setLoading(true);
    console.log('audio url:', audioUrl);
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
    }
    setAudioUrl('')
    try {
      let data = text.trim();
      if (data === '') {
        data = language === 'Chinese' ? placeholderCN : placeholderEn;
        console.log('use default placehold to generate audio.')
      }
      const response = await fetch("/api/tts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: data,
          voice: voice[0].value,
        }),
      });
      if (!response.ok) {
        throw new Error("failed to generate audio: " + response.statusText);
      }
      const blob = await response.blob();
      const audioUrl = URL.createObjectURL(blob);
      setAudioUrl(audioUrl);
    } catch (error) {
      console.log("error in tts:", error);
      ErrorPopup(`${error}`);
    } finally {
      setLoading(false);
    }
  };

  function ErrorPopup(error: any) {
    return toast({
      title: "Something went wrong",
      description: error,
      variant: "destructive",
    })
  }
  return (
    <main className="h-screen w-full p-8 text-base text-lime-700 md:mx-auto md:max-w-5xl">
      <LangBox language={language} setLanguage={setLanguage} />
      <VoiceOptionV2 voices={language2voices[language]}
        voice={voice[0]}
        onChange={(value) => setVoice([value])} />
      <Textarea
        className="mt-4 h-2/5 bg-inherit text-xl placeholder:text-gray-500 dark:bg-black dark:text-white"
        text={text}
        placeholder={language === 'Chinese' ? placeholderCN : placeholderEn}
        onChange={inputChangeHandler} />
      <Button loading={loading} onClick={clickHandler} />
      {audioUrl &&
        (
          <div className="round">
            <AudioPlayer
              src={audioUrl}
              onPlay={e => console.log("onPlay")}
              showDownloadProgress
              // other props here
              customProgressBarSection={
                [
                  RHAP_UI.CURRENT_TIME,
                  RHAP_UI.PROGRESS_BAR,
                  RHAP_UI.DURATION,
                  <a className="pl-2" key={audioUrl} href={audioUrl} download={`${text.trim().slice(0, Math.min(50, text.length))}.mp3`}><DownloadIcon /></a>,
                ]}
            />
          </div>
        )
      }
    </main>
  );
}
export default TTS;

const placeholderCN = `Shine TTS 是一款文字生成语音的程序,支持生成中文和英文语音,输入文字后,点击生成按钮即可。请注意, 最大可支持字符数量为999个`;
const placeholderEn = `Shine TTS is a text-to-speech program that supports generating voices in both Chinese and English. Simply input your text, click the generate button, and it will produce the speech. Please note that it supports a maximum of 999 words.`;
