"use client"
import { language2voices, langPlaceHolders, Voice } from "@/lib/lang_constants";
import { useEffect, useState } from "react";
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import '../../../../styles/audio-player.css';
import { DownloadIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import LangBox from "@/components/tts/lang-box";
import Button from "@/components/tts/button";
import { toast } from "@/components/ui/use-toast";
import VoiceOptionV2 from "@/components/tts/voice-option-v2";
import { useParams, useRouter } from "next/navigation";

export default function TTS({params}: { params: { model?: string[] } }) {
  // why is it loading twice? NOT: why is loading this twice.
  console.log("load the tts", params.model);
  const router = useRouter()

  const lang = params.model?.[0] ?? 'en';

  //  const [language, setLanguage] = useState(langMap[lang]);
  const [voice, setVoice] = useState<Voice[]>(language2voices[lang]);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  //chunk
  const [audioUrl, setAudioUrl] = useState('');


  useEffect(() => {
    // setVoice([language2voices[language][0]]);
    setAudioUrl('');
  }, [lang]);


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
        data = langPlaceHolders[lang];
        console.log('use default placeholder to generate audio.')
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

  function onPush(param: string) {
    router.push(`/tts/${param}`)
  }

  return (
    <main className="h-screen w-full p-8 text-base text-lime-700 md:mx-auto md:max-w-5xl">
      <LangBox language={lang} setLanguage={(arg) => onPush(arg)} />
      <VoiceOptionV2 voices={language2voices[lang]}
        voice={voice[0]}
        onChange={(value) => setVoice([value])} />
      <Textarea
        className="mt-4 h-2/5 bg-inherit text-xl placeholder:text-gray-500 dark:bg-black dark:text-white"
        text={text}
        placeholder={langPlaceHolders[lang]}
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
