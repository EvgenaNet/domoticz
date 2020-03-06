/*
 Highcharts JS v7.1.2 (2019-06-03)

 X-range series

 (c) 2010-2019 Torstein Honsi, Lars A. V. Cabrera

 License: www.highcharts.com/license
*/
(function(c){"object"===typeof module&&module.exports?(c["default"]=c,module.exports=c):"function"===typeof define&&define.amd?define("highcharts/modules/xrange",["highcharts"],function(k){c(k);c.Highcharts=k;return c}):c("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(c){function k(d,c,k,u){d.hasOwnProperty(c)||(d[c]=u.apply(null,k))}c=c?c._modules:{};k(c,"modules/xrange.src.js",[c["parts/Globals.js"]],function(d){var c=d.addEvent,k=d.defined,u=d.Color,y=d.seriesTypes.column,z=d.correctFloat,
q=d.isNumber,v=d.isObject,r=d.merge,w=d.pick,A=d.seriesType,B=d.Axis,x=d.Point,C=d.Series;A("xrange","column",{colorByPoint:!0,dataLabels:{formatter:function(){var a=this.point.partialFill;v(a)&&(a=a.amount);if(q(a)&&0<a)return z(100*a)+"%"},inside:!0,verticalAlign:"middle"},tooltip:{headerFormat:'\x3cspan style\x3d"font-size: 10px"\x3e{point.x} - {point.x2}\x3c/span\x3e\x3cbr/\x3e',pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.yCategory}\x3c/b\x3e\x3cbr/\x3e'},
borderRadius:3,pointRange:0},{type:"xrange",parallelArrays:["x","x2","y"],requireSorting:!1,animate:d.seriesTypes.line.prototype.animate,cropShoulder:1,getExtremesFromAll:!0,autoIncrement:d.noop,buildKDTree:d.noop,getColumnMetrics:function(){function a(){e.series.forEach(function(a){var b=a.xAxis;a.xAxis=a.yAxis;a.yAxis=b})}var b,e=this.chart;a();b=y.prototype.getColumnMetrics.call(this);a();return b},cropData:function(a,b,e,d){b=C.prototype.cropData.call(this,this.x2Data,b,e,d);b.xData=a.slice(b.start,
b.end);return b},findPointIndex:function(a){var b=this.data,e=this.points,c=a.id,g,f;c&&(f=(g=d.find(b,function(a){return a.id===c}))?g.index:void 0);void 0===f&&(f=(g=d.find(b,function(b){return b.x===a.x&&b.x2===a.x2&&!(e[f]&&e[f].touched)}))?g.index:void 0);this.cropped&&f>=this.cropStart&&(f-=this.cropStart);return f},translatePoint:function(a){var b=this.xAxis,e=this.yAxis,d=this.columnMetrics,g=this.options,f=g.minPointLength||0,c=a.plotX,l=w(a.x2,a.x+(a.len||0)),h=b.translate(l,0,0,0,1),l=
Math.abs(h-c),p=this.chart.inverted,t=w(g.borderWidth,1)%2/2,m=d.offset,n=Math.round(d.width);f&&(f-=l,0>f&&(f=0),c-=f/2,h+=f/2);c=Math.max(c,-10);h=Math.min(Math.max(h,-10),b.len+10);k(a.options.pointWidth)&&(m-=(Math.ceil(a.options.pointWidth)-n)/2,n=Math.ceil(a.options.pointWidth));g.pointPlacement&&q(a.plotY)&&e.categories&&(a.plotY=e.translate(a.y,0,1,0,1,g.pointPlacement));a.shapeArgs={x:Math.floor(Math.min(c,h))+t,y:Math.floor(a.plotY+m)+t,width:Math.round(Math.abs(h-c)),height:n,r:this.options.borderRadius};
g=a.shapeArgs.x;f=g+a.shapeArgs.width;0>g||f>b.len?(g=Math.min(b.len,Math.max(0,g)),f=Math.max(0,Math.min(f,b.len)),h=f-g,a.dlBox=r(a.shapeArgs,{x:g,width:f-g,centerX:h?h/2:null})):a.dlBox=null;p?(a.tooltipPos[1]+=l/2*(b.reversed?1:-1),a.tooltipPos[0]+=d.width/2,a.tooltipPos[1]=Math.max(Math.min(a.tooltipPos[1],b.len-1),0),a.tooltipPos[0]=Math.max(Math.min(a.tooltipPos[0],e.len-1),0)):(a.tooltipPos[0]+=l/2*(b.reversed?-1:1),a.tooltipPos[1]-=d.width/2,a.tooltipPos[0]=Math.max(Math.min(a.tooltipPos[0],
b.len-1),0),a.tooltipPos[1]=Math.max(Math.min(a.tooltipPos[1],e.len-1),0));if(e=a.partialFill)v(e)&&(e=e.amount),q(e)||(e=0),b=a.shapeArgs,a.partShapeArgs={x:b.x,y:b.y,width:b.width,height:b.height,r:this.options.borderRadius},a.clipRectArgs={x:b.x,y:b.y,width:Math.max(Math.round(l*e+(a.plotX-c)),0),height:b.height}},translate:function(){y.prototype.translate.apply(this,arguments);this.points.forEach(function(a){this.translatePoint(a)},this)},drawPoint:function(a,b){var e=this.options,c=this.chart.renderer,
d=a.graphic,f=a.shapeType,k=a.shapeArgs,l=a.partShapeArgs,h=a.clipRectArgs,p=a.partialFill,t=e.stacking&&!e.borderRadius,m=a.state,n=e.states[m||"normal"]||{},q=void 0===m?"attr":b,m=this.pointAttribs(a,m),n=w(this.chart.options.chart.animation,n.animation);if(a.isNull)d&&(a.graphic=d.destroy());else{if(d)a.graphicOriginal[b](k);else a.graphic=d=c.g("point").addClass(a.getClassName()).add(a.group||this.group),a.graphicOriginal=c[f](r(k)).addClass(a.getClassName()).addClass("highcharts-partfill-original").add(d);
l&&(a.graphicOverlay?(a.graphicOverlay[b](r(l)),a.clipRect[b](r(h))):(a.clipRect=c.clipRect(h.x,h.y,h.width,h.height),a.graphicOverlay=c[f](l).addClass("highcharts-partfill-overlay").add(d).clip(a.clipRect)));this.chart.styledMode||(a.graphicOriginal[b](m,n).shadow(e.shadow,null,t),l&&(v(p)||(p={}),v(e.partialFill)&&(p=r(p,e.partialFill)),b=p.fill||u(m.fill).brighten(-.3).get()||u(a.color||this.color).brighten(-.3).get(),m.fill=b,a.graphicOverlay[q](m,n).shadow(e.shadow,null,t)))}},drawPoints:function(){var a=
this,b=a.getAnimationVerb();a.points.forEach(function(c){a.drawPoint(c,b)})},getAnimationVerb:function(){return this.chart.pointCount<(this.options.animationLimit||250)?"animate":"attr"}},{resolveColor:function(){var a,b=this.series;if(b.options.colorByPoint&&!this.options.color){a=b.options.colors||b.chart.options.colors;var c=this.y%(a?a.length:b.chart.options.chart.colorCount);a=a&&a[c];b.chart.styledMode||(this.color=a);this.options.colorIndex||(this.colorIndex=c)}else this.color||(this.color=
b.color)},init:function(){x.prototype.init.apply(this,arguments);this.y||(this.y=0);return this},setState:function(){x.prototype.setState.apply(this,arguments);this.series.drawPoint(this,this.series.getAnimationVerb())},getLabelConfig:function(){var a=x.prototype.getLabelConfig.call(this),b=this.series.yAxis.categories;a.x2=this.x2;a.yCategory=this.yCategory=b&&b[this.y];return a},tooltipDateKeys:["x","x2"],isValid:function(){return"number"===typeof this.x&&"number"===typeof this.x2}});c(B,"afterGetSeriesExtremes",
function(){var a=this.series,b,c;this.isXAxis&&(b=w(this.dataMax,-Number.MAX_VALUE),a.forEach(function(a){a.x2Data&&a.x2Data.forEach(function(a){a>b&&(b=a,c=!0)})}),c&&(this.dataMax=b))})});k(c,"masters/modules/xrange.src.js",[],function(){})});

