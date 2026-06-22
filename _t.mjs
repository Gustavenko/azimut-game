const R=Math.PI/180;
const POINTS={5:{lat:48.874940,lon:18.115835},14:{lat:48.876102,lon:18.117777},
 11:{lat:48.878120,lon:18.123507},1:{lat:48.872753,lon:18.114098},2:{lat:48.872032,lon:18.116972},
 7:{lat:48.875122,lon:18.120920},8:{lat:48.874123,lon:18.122746}};
function bearing(a,b){const A=POINTS[a],B=POINTS[b];const la1=A.lat*R,la2=B.lat*R,dl=(B.lon-A.lon)*R;
 const y=Math.sin(dl)*Math.cos(la2);const x=Math.cos(la1)*Math.sin(la2)-Math.sin(la1)*Math.cos(la2)*Math.cos(dl);
 return (Math.atan2(y,x)/R+360)%360;}
function distance(a,b){const A=POINTS[a],B=POINTS[b],Rm=6371000;const la1=A.lat*R,la2=B.lat*R,
 dla=(B.lat-A.lat)*R,dlo=(B.lon-A.lon)*R;const h=Math.sin(dla/2)**2+Math.cos(la1)*Math.cos(la2)*Math.sin(dlo/2)**2;
 return 2*Rm*Math.asin(Math.sqrt(h));}
const D=5.5;
for(const [a,b] of [[5,14],[5,17===17?14:0].slice?[5,14]:[5,14]]){}
for(const [a,b] of [[5,14],[1,2],[8,7],[2,3]]){
 const t=bearing(a,b);
 console.log(`${a}->${b}  pravý ${t.toFixed(1)}  magnet ${((t-D+360)%360).toFixed(1)}  vzdial ${Math.round(distance(a,b))}m`);
}
