/** @jsxImportSource @/lib/localized-jsx */
'use client';
import Link from '@/components/site-link';
import {MediaGallery} from '@/components/product-media';
export function ProductPrinciples({slug}:{slug:string}){
 const imaging=['dr-brain','realnow'].includes(slug);
 return <section id="principles" className="product-chapter product-principles"><h2>Technology Principles</h2><div className="deployment-grid">{(imaging?[
 ['Image Input','Supported imaging sequences are checked for quality before analysis.'],
 ['AI Quantification','Algorithms identify structures or regions and generate module-specific measurements and maps.'],
 ['Clinical Review','Specialists review the outputs with source images, clinical history and the relevant evidence.']
 ]:[
 ['Immersive Tasks','VR scenarios present structured visual and interactive activities in a controlled task environment.'],
 ['Eye Tracking and Responses','Supported modules record gaze and task responses. Measurements are interpreted within the assessment protocol.'],
 ['Individualized Training','Professionals select suitable activities and difficulty, then review session records to adjust the plan.']
 ]).map(([title,text])=><article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div><Link className="text-link" href={imaging?'/technology/imaging-ai':'/technology/eye-tracking'}>Explore the technology</Link></section>
}
export function TrainingCoverage({slug}:{slug:string}){
 const ids=slug==='autismshield'?['lumibrain-asd-emotion','lumibrain-asd-daily','lumibrain-asd-social','lumibrain-cognitive-domains']:['lumibrain-adhd-memory','lumibrain-adhd-abstraction','lumibrain-adhd-executive','lumibrain-adhd-calculation','lumibrain-adhd-attention','lumibrain-adhd-recall'];
 return <section className="training-coverage"><MediaGallery ids={ids} title="Rehabilitation Training Modules"/></section>;
}
