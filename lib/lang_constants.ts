const color = 'black'
export const language2voices: Record<string, Voice[]> = {
  'Chinese': [
    { value: 'zh-CN-XiaoxiaoNeural', label: 'zh-CN-XiaoxiaoNeural, Female', color: color },
    { value: 'zh-CN-XiaoyiNeural', label: 'zh-CN-XiaoyiNeural, Female', color: color },
    { value: 'zh-CN-YunjianNeural', label: 'zh-CN-YunjianNeural, Male', color: color },
    { value: 'zh-CN-YunxiNeural', label: 'zh-CN-YunxiNeural, Male', color: color },
    { value: 'zh-CN-YunxiaNeural', label: 'zh-CN-YunxiaNeural, Male', color: color },
    { value: 'zh-CN-YunyangNeural', label: 'zh-CN-YunyangNeural, Male', color: color },
  ],
  'Japanese': [
    { value: 'ja-JP-NanamiNeural', label: 'ja-JP-NanamiNeural, Female', color: color },
    { value: 'ja-JP-KeitaNeural', label: 'ja-JP-KeitaNeural, Female', color: color },
  ],
  'English': [
    { value: 'en-US-EmmaNeural', label: 'en-US-EmmaNeural, Female', color: color },
    { value: 'en-US-AnaNeural', label: 'en-US-AnaNeural, Female', color: color },
    { value: 'en-US-AriaNeural', label: 'en-US-AriaNeural, Female', color: color },
    { value: 'en-US-AvaNeural', label: 'en-US-AvaNeural, Female', color: color },
    { value: 'en-US-JennyNeural', label: 'en-US-JennyNeural, Female', color: color },
    { value: 'en-US-MichelleNeural', label: 'en-US-MichelleNeural, Female', color: color },
    { value: 'en-US-AndrewNeural', label: 'en-US-AndrewNeural, Male', color: color },
    { value: 'en-US-BrianNeural', label: 'en-US-BrianNeural, Male', color: color },
    { value: 'en-US-ChristopherNeural', label: 'en-US-ChristopherNeural, Male', color: color },
    { value: 'en-US-EricNeural', label: 'en-US-EricNeural, Male', color: color },
    { value: 'en-US-GuyNeural', label: 'en-US-GuyNeural, Male', color: color },
    { value: 'en-US-RogerNeural', label: 'en-US-RogerNeural, Male', color: color },
  ],
}
//

const placeholderCN = `Shine TTS 是一款文字生成语音的程序,支持生成中文和英文语音,输入文字后,点击生成按钮即可。请注意, 最大可支持字符数量为999个`;
const placeholderJA = `
ください
おねがいします
`;
const placeholderEn = `Shine TTS is a text-to-speech program that supports generating voices in both Chinese and English. Simply input your text, click the generate button, and it will produce the speech. Please note that it supports a maximum of 999 words.`;

export const langPlaceHolders: Record<string, string> = {
  'Chinese': placeholderCN,
  'Japanese': placeholderJA,
  'English': placeholderEn,
}

export type Voice = {
  value: string,
  label: string
  color: string
}

export type VoiceV2 = {
  name: string,
  voices: Voice[]
}
