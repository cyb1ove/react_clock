(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{16:function(t,e,c){},18:function(t,e,c){"use strict";c.r(e);var n=c(4),i=c.n(n),o=c(5),s=c(6),a=c(9),l=c(8),r=c(1),u=c.n(r),h=c(7),k=(c(16),c(0)),b=function(t){Object(a.a)(c,t);var e=Object(l.a)(c);function c(){var t;Object(o.a)(this,c);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={date:new Date,timerId:setInterval((function(){}),0),isClockVisible:!0},t.showClock=function(){t.setState({isClockVisible:!0})},t.hideClock=function(){t.setState({isClockVisible:!1})},t}return Object(s.a)(c,[{key:"componentDidMount",value:function(){var t=this;this.state.timerId=setInterval((function(){return t.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){Object(h.clearInterval)(this.state.timerId)}},{key:"tick",value:function(){this.setState({date:new Date}),console.log(this.state.date.toLocaleTimeString())}},{key:"render",value:function(){return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)("h1",{children:"React clock"}),this.state.isClockVisible&&Object(k.jsx)("p",{children:"Current time: ".concat(this.state.date.toLocaleTimeString())}),Object(k.jsx)("button",{type:"button",onClick:this.showClock,children:"Show clock"}),Object(k.jsx)("button",{type:"button",onClick:this.hideClock,children:"Hide clock"})]})}}]),c}(u.a.Component);i.a.render(Object(k.jsx)(b,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.8b58d14e.chunk.js.map