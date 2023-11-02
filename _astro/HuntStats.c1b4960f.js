import{c as L,d as Q,g as h,a as b,i as d,b as N,r as V,t as f,F as A}from"./web.14707a3e.js";import{r as W}from"./readFile.fb16cf44.js";const X=f('<div class="bg-white dark:bg-slate-800 shadow overflow-hidden rounded-md space-y-6 p-6"><h1 class="text-xl font-medium">Open your "attributes.xml". You can find it in the "Hunt Showdown/user/profiles/default" directory.</h1><input type=file accept=.xml><!$><!/>'),Z=f('<table class="min-w-full text-center"><thead class=border-b><tr><th class="border-r px-1">Name</th><th class="border-r px-1">MMR</th><th class="border-r px-1">Bounties Picked Up</th><th class="border-r px-1">Bounties Extracted</th><th class="border-r px-1">Killed by Me</th><th class="border-r px-1">Killed by Teammate</th><th class="border-r px-1">Killed Me</th><th class=px-1>Killed Teammate</th></tr></thead><tbody class=border-b></tbody><tfoot><tr><td>Own Team: <!$><!/></td><td>Team MMR: <!$><!/></td><td></td><td></td><td></td><td></td><td></td><td>'),ee=f("<tr><td class=border-r></td><td class=border-r></td><td class=border-r></td><td class=border-r><!$><!/><!$><!/></td><td class=border-r></td><td class=border-r></td><td class=border-r></td><td>"),[te,le]=L([]),g=(e,t,d)=>{const i=e.querySelector(`[name='MissionBagTeam_${t}_${d}']`);return i?i.getAttribute("value"):""},r=(e,t,d,i)=>{const r=e.querySelector(`[name='MissionBagPlayer_${t}_${d}_${i}']`);return r?r.getAttribute("value"):""},s=(e,t)=>{const d=t.matchAll(/@(\w*) ~([\d:]*)/g);let i=[];for(const t of d)t[1]==e&&i.push(t[2]);return i},ie=e=>{const t=(new DOMParser).parseFromString(e,"application/xml"),d=t.querySelector("[name='MissionBagNumTeams']");if(!d)return;const i=parseInt(d.getAttribute("value"));let l=[];for(let e=0;e<i;e++){const d=parseInt(g(t,e,"numplayers"));if(isNaN(d))break;let i=[];for(let l=0;l<d;l++)i.push({name:r(t,e,l,"blood_line_name"),mmr:r(t,e,l,"mmr"),bountiesExtracted:parseInt(r(t,e,l,"bountyextracted")),downedbyteammate:s("ui_team_details_downed",r(t,e,l,"tooltip_downedbyteammate")),bountyextracted:s("ui_team_details_extracted_bounty",r(t,e,l,"tooltipbountyextracted")),bountypickedup:s("ui_team_details_carried_bounty",r(t,e,l,"tooltipbountypickedup")),downedbyme:s("ui_team_details_downed",r(t,e,l,"tooltipdownedbyme")),downedme:s("ui_team_details_downed",r(t,e,l,"tooltipdownedme")),downedteammate:s("ui_team_details_downed",r(t,e,l,"tooltipdownedteammate")),killedbyme:s("ui_team_details_killed",r(t,e,l,"tooltipkilledbyme")),killedbyteammate:s("ui_team_details_killed",r(t,e,l,"tooltipkilledbyteammate")),killedme:s("ui_team_details_killed",r(t,e,l,"tooltipkilledme")),killedteammate:s("ui_team_details_killed",r(t,e,l,"tooltipkilledteammate"))});l.push({isOwnTeam:"true"==g(t,e,"ownteam"),mmr:g(t,e,"mmr"),players:i})}le(l)},c=(e,t)=>e.map((e=>`[${e}]${t}`)).join(", ");function re(){return(()=>{const e=h(X),t=e.firstChild.nextSibling,i=t.nextSibling,[r,l]=b(i.nextSibling);return t.$$input=e=>W(e.target.files[0],ie),d(e,N(A,{get each(){return te()},children:e=>(()=>{const t=h(Z),i=t.firstChild.nextSibling,r=i.nextSibling.firstChild.firstChild,l=r.firstChild.nextSibling,[a,n]=b(l.nextSibling),s=r.nextSibling,o=s.firstChild.nextSibling,[m,u]=b(o.nextSibling);return d(i,N(A,{get each(){return e.players},children:e=>(()=>{const t=h(ee),i=t.firstChild,r=i.nextSibling,l=r.nextSibling,a=l.nextSibling,n=a.firstChild,[s,o]=b(n.nextSibling),m=s.nextSibling,[u,p]=b(m.nextSibling),x=a.nextSibling,_=x.nextSibling,g=_.nextSibling,y=g.nextSibling;return d(i,(()=>e.name)),d(r,(()=>e.mmr)),d(l,(()=>c(e.bountypickedup,"🪙"))),d(a,(()=>c(e.bountyextracted,"")),s,o),d(a,(()=>"🪙".repeat(e.bountiesExtracted)),u,p),d(x,(()=>c(e.downedbyme.concat(e.killedbyme),"💀"))),d(_,(()=>c(e.downedbyteammate.concat(e.killedbyteammate),"💀"))),d(g,(()=>c(e.downedme.concat(e.killedme),"💀"))),d(y,(()=>c(e.downedteammate.concat(e.killedteammate),"💀"))),t})()})),d(r,(()=>e.isOwnTeam?"✅":"❌"),a,n),d(s,(()=>e.mmr),m,u),t})()}),r,l),V(),e})()}Q(["input"]);export{re as default};