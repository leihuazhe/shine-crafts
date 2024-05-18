import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";


const LangBox = ({ language, setLanguage }: { language: string, setLanguage: (arg: string) => void }) => {
  return (
    <div className="mt-8 flex items-center justify-center  dark:text-white">
      <RadioGroup className="flex flex-row" defaultValue={language} onValueChange={(value: any) => setLanguage(value)}>
        <div className="m-1 flex items-center space-x-2">
          <RadioGroupItem
            value="Chinese"
            id="r1" />
          <Label className="text-xl" htmlFor="r1">Chinese</Label>
        </div>
        <div className="m-1 flex items-center space-x-2">
          <RadioGroupItem
            value="English"
            id="r2" />
          <Label htmlFor="r2" className="text-xl">English</Label>
        </div>
      </RadioGroup>
    </div >
  );
}

export default LangBox;
