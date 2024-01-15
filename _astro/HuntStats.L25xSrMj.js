import{c as L,d as Q,g as h,a as b,i as a,b as N,r as V,t as f,F as A}from"./web.0984UVao.js";import{r as W}from"./readFile.WI4_datc.js";var X=f('<div class="rounded-lg shadow-lg dark:bg-gray-900/50 backdrop-blur space-y-6 p-6"><h1 class="text-xl font-medium">Open your "attributes.xml". You can find it in the "Hunt Showdown/user/profiles/default" directory.</h1><input type=file accept=.xml><!$><!/>'),Z=f('<table class="min-w-full text-center"><thead class=border-b><tr><th class="border-r px-1">Name</th><th class="border-r px-1">MMR</th><th class="border-r px-1">Bounties Picked Up</th><th class="border-r px-1">Bounties Extracted</th><th class="border-r px-1">Killed by Me</th><th class="border-r px-1">Killed by Teammate</th><th class="border-r px-1">Killed Me</th><th class=px-1>Killed Teammate</th></tr></thead><tbody class=border-b></tbody><tfoot><tr><td>Own Team: <!$><!/></td><td>Team MMR: <!$><!/></td><td></td><td></td><td></td><td></td><td></td><td>'),ee=f("<tr><td class=border-r></td><td class=border-r></td><td class=border-r></td><td class=border-r><!$><!/><!$><!/></td><td class=border-r></td><td class=border-r></td><td class=border-r></td><td>");const[te,le]=L([]),g=(e,t,a)=>{const i=e.querySelector(`[name='MissionBagTeam_${t}_${a}']`);return i?i.getAttribute("value"):""},n=(e,t,a,i)=>{const d=e.querySelector(`[name='MissionBagPlayer_${t}_${a}_${i}']`);return d?d.getAttribute("value"):""},s=(e,t)=>{const a=t.matchAll(/@(\w*) ~([\d:]*)/g);let i=[];for(const t of a)t[1]==e&&i.push(t[2]);return i},ie=e=>{const t=(new DOMParser).parseFromString(e,"application/xml"),a=t.querySelector("[name='MissionBagNumTeams']");if(!a)return;const i=parseInt(a.getAttribute("value"));let d=[];for(let e=0;e<i;e++){const a=parseInt(g(t,e,"numplayers"));if(isNaN(a))break;let i=[];for(let d=0;d<a;d++)i.push({name:n(t,e,d,"blood_line_name"),mmr:n(t,e,d,"mmr"),bountiesExtracted:parseInt(n(t,e,d,"bountyextracted")),downedbyteammate:s("ui_team_details_downed",n(t,e,d,"tooltip_downedbyteammate")),bountyextracted:s("ui_team_details_extracted_bounty",n(t,e,d,"tooltipbountyextracted")),bountypickedup:s("ui_team_details_carried_bounty",n(t,e,d,"tooltipbountypickedup")),downedbyme:s("ui_team_details_downed",n(t,e,d,"tooltipdownedbyme")),downedme:s("ui_team_details_downed",n(t,e,d,"tooltipdownedme")),downedteammate:s("ui_team_details_downed",n(t,e,d,"tooltipdownedteammate")),killedbyme:s("ui_team_details_killed",n(t,e,d,"tooltipkilledbyme")),killedbyteammate:s("ui_team_details_killed",n(t,e,d,"tooltipkilledbyteammate")),killedme:s("ui_team_details_killed",n(t,e,d,"tooltipkilledme")),killedteammate:s("ui_team_details_killed",n(t,e,d,"tooltipkilledteammate"))});d.push({isOwnTeam:"true"==g(t,e,"ownteam"),mmr:g(t,e,"mmr"),players:i})}le(d)},c=(e,t)=>e.map((e=>`[${e}]${t}`)).join(", ");function ne(){return(()=>{var e=h(X),t=e.firstChild.nextSibling,i=t.nextSibling,[d,l]=b(i.nextSibling);return t.$$input=e=>W(e.target.files[0],ie),a(e,N(A,{get each(){return te()},children:e=>(()=>{var t=h(Z),i=t.firstChild.nextSibling,d=i.nextSibling.firstChild.firstChild,l=d.firstChild.nextSibling,[r,n]=b(l.nextSibling),s=d.nextSibling,o=s.firstChild.nextSibling,[m,u]=b(o.nextSibling);return a(i,N(A,{get each(){return e.players},children:e=>(()=>{var t=h(ee),i=t.firstChild,d=i.nextSibling,l=d.nextSibling,r=l.nextSibling,n=r.firstChild,[s,o]=b(n.nextSibling),m=s.nextSibling,[u,p]=b(m.nextSibling),x=r.nextSibling,_=x.nextSibling,g=_.nextSibling,y=g.nextSibling;return a(i,(()=>e.name)),a(d,(()=>e.mmr)),a(l,(()=>c(e.bountypickedup,"🪙"))),a(r,(()=>c(e.bountyextracted,"")),s,o),a(r,(()=>"🪙".repeat(e.bountiesExtracted)),u,p),a(x,(()=>c(e.downedbyme.concat(e.killedbyme),"💀"))),a(_,(()=>c(e.downedbyteammate.concat(e.killedbyteammate),"💀"))),a(g,(()=>c(e.downedme.concat(e.killedme),"💀"))),a(y,(()=>c(e.downedteammate.concat(e.killedteammate),"💀"))),t})()})),a(d,(()=>e.isOwnTeam?"✅":"❌"),r,n),a(s,(()=>e.mmr),m,u),t})()}),d,l),V(),e})()}Q(["input"]);export{ne as default};