(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),i=n.n(c),o=n(2),a=n(3),r=n(5),s=n(4),l=n(1),u=n.n(l),h=(n(12),n(0)),b=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={date:new Date,timerId:setInterval((function(){}),0)},t}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.state.timerId=setInterval((function(){return t.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timerId)}},{key:"tick",value:function(){this.setState({date:new Date}),console.log(this.state.date.toLocaleTimeString())}},{key:"render",value:function(){return Object(h.jsx)("p",{children:"Current time: ".concat(this.state.date.toLocaleTimeString())})}}]),n}(u.a.Component),k=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={isClockVisible:!0},t.showClock=function(){t.setState({isClockVisible:!0})},t.hideClock=function(){t.setState({isClockVisible:!1})},t}return Object(a.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"React clock"}),this.state.isClockVisible&&Object(h.jsx)(b,{}),Object(h.jsx)("button",{type:"button",onClick:this.showClock,children:"Show clock"}),Object(h.jsx)("button",{type:"button",onClick:this.hideClock,children:"Hide clock"})]})}}]),n}(u.a.Component);i.a.render(Object(h.jsx)(k,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.938d5b62.chunk.js.map