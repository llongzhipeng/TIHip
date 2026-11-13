import {review3Images} from './review3-media';
import type {MediaImage} from './yiwei-media';

export type FieldCase={id:string;market:string;setting:string;description:string;slide:number;photos:MediaImage[]};
const photo=(id:string,file:string,title:string,width:number,height:number,viewport?:MediaImage['viewport']):MediaImage=>({id,src:'/media/field/'+file,title,alt:title+' in a company-supplied field-use photo',caption:title,source:'/about/global-in-practice',width,height,viewport});

const updatedPhoto=(id:string):MediaImage=>({...review3Images.find(m=>m.id===id)!});

export const fieldCases:FieldCase[]=[
 {id:'hong-kong',market:'Hong Kong',setting:'Community & clinic',description:'Community cognitive assessment and clinic rehabilitation. The supplied case documents community screening in June 2025.',slide:2,photos:[
  photo('hk-community','hong-kong-community.jpeg','Community VR cognitive assessment',1600,1200,{x:.40,y:.32,width:.60,height:.66}),
  photo('hk-clinic','hong-kong-clinic.webp','Clinic VR rehabilitation practice',720,1280,{x:.25,y:.07,width:.75,height:.87}),
 ]},
 {id:'thailand',market:'Thailand',setting:'Hospital demonstrations',description:'Company-supplied photos of VR equipment demonstrations and cognitive assessment in a hospital setting in Thailand.',slide:36,photos:[updatedPhoto('field-thailand-2'),updatedPhoto('field-thailand-1')]},
 {id:'malaysia',market:'Malaysia',setting:'Local demonstration',description:'A hands-on VR demonstration with participants and local teams.',slide:5,photos:[updatedPhoto('field-malaysia')]},
 {id:'indonesia',market:'Indonesia',setting:'Guided VR practice',description:'Seated VR practice with handheld controllers and staff support.',slide:6,photos:[updatedPhoto('field-indonesia-1'),updatedPhoto('field-indonesia-2')]},
 {id:'saudi-arabia',market:'Saudi Arabia',setting:'Clinical team exchange',description:'A clinical team exchange shown in YIWEI’s supplied field-use presentation.',slide:4,photos:[updatedPhoto('field-saudi-arabia')]},
 {id:'india',market:'India',setting:'Headset demonstration',description:'A participant trying the QuickMind headset.',slide:4,photos:[photo('in-demo','india.webp','QuickMind headset demonstration in India',961,1280)]},
 {id:'uzbekistan',market:'Uzbekistan',setting:'Interactive VR session',description:'A standing VR session using handheld controllers.',slide:4,photos:[photo('uz-session','uzbekistan.webp','Interactive VR session in Uzbekistan',1080,1439)]},
 {id:'italy',market:'Italy',setting:'Team demonstration',description:'A seated headset demonstration with the local team.',slide:5,photos:[updatedPhoto('field-italy')]},
 {id:'kazakhstan',market:'Kazakhstan',setting:'Localized VR practice',description:'VR task practice with a localized task display and the care team.',slide:5,photos:[updatedPhoto('field-kazakhstan')]},
];
