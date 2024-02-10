import { ArgentinaFlag, BoliviaFlag, BrazilFlag, ChileFlag, ColombiaFlag, EcuadorFlag, FrechGuyanaFlag, GuyanaFlag, IslasMalvinasFlag, ParaguayFlag, PeruFlag, SurinameFlag, UruguayFlag, VenezuelaFlag } from "./FlagElements";
import { FlagCode } from "./flags";

interface Props {
  code: FlagCode
}

function Flag({ code }: Props): JSX.Element {
  switch(code){
    case "51":
      return <PeruFlag />
    case "54":
      return <ArgentinaFlag />
    case "55":
      return <BrazilFlag />
    case "56": 
      return <ChileFlag />
    case "57":
      return <ColombiaFlag />
    case "58":
      return <VenezuelaFlag />
    case "500":
      return <IslasMalvinasFlag />
    case "591":
      return <BoliviaFlag />
    case "592":
      return <GuyanaFlag />
    case "593":
      return <EcuadorFlag />
    case "594":
      return <FrechGuyanaFlag />
    case "595":
      return <ParaguayFlag />
    case "597":
      return <SurinameFlag />
    case "598":
      return <UruguayFlag />
  }
}

export { Flag }