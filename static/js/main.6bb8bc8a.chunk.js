(this["webpackJsonpcoop-chuck-norris"]=this["webpackJsonpcoop-chuck-norris"]||[]).push([[0],{17:function(e,t,a){e.exports=a(42)},22:function(e,t,a){},23:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(16),s=a.n(o),r=(a(22),a(2)),l=a(3),i=a(5),u=a(4),m=a(6),d=(a(23),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={},a.onButtonPress=function(e){a.props.getRandomJokeFunc()},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"col-12 col-lg-12"},c.a.createElement("button",{type:"button",className:"btn btn-success",onClick:this.onButtonPress},"Get Random Joke"))}}]),t}(c.a.Component)),h=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={name:"",specialCharacters:["1","2","3","4","5","6","7","8","9","0","!","@","\xa3","$","%","^","&","*","(",")","_","+","=","{","}","[","]",";",":","|","<",">",",",".",'"',"'","`","~","\xb1","\xa7","\u20ac","/","\\"]},a.handleKeyPress=function(e){"Enter"===e.key&&a.onButtonPress()},a.onButtonPress=function(){if(a.checkName()){var e=a.state.name.indexOf(" "),t=a.state.name.substring(0,e),n=a.state.name.substring(e+1,a.state.name.length);a.props.getJokeWithNameFunc(t,n)}},a.checkName=function(){if(""===a.state.name)return alert("ERROR: You must enter a name"),!1;if(-1===a.state.name.indexOf(" "))return alert("ERROR: You must enter a first name and a second name separted with a space"),!1;var e=!0;return a.state.specialCharacters.map((function(t){return a.state.name.indexOf(t)>-1?e=!1:e})),!1!==e||(alert("ERROR: Your name must not contain numbers or special characters"),!1)},a.updateName=function(e){"nameId"===e.target.id&&a.setState({name:e.target.value})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"row padding-left"},c.a.createElement("div",{className:"col-6 col-lg-10"},c.a.createElement("input",{id:"nameId",type:"text",className:"form-control",placeholder:"Enter a first name and a second name",style:{height:"40px"},onKeyPress:this.handleKeyPress,value:this.state.name,onChange:this.updateName})),c.a.createElement("div",{className:"col-12 col-lg-2"},c.a.createElement("button",{type:"button",style:{height:"40px"},className:"btn btn-success",onClick:this.onButtonPress},"Search")))}}]),t}(c.a.Component),p=a(24),f=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={jokeData:[],jokeValues:[],display:!1},a.getRandomJoke=function(){p.get("https://api.icndb.com/jokes/random?exclude=[explicit]?escape=javascript").then((function(e){a.setState({jokeData:e.data,jokeValues:e.data.value})})).catch((function(e){console.log(e)}))},a.getJokeWithName=function(e,t){p.get("https://api.icndb.com/jokes/random?exclude=[explicit]?escape=javascript&firstName="+e+"&lastName="+t).then((function(e){a.setState({jokeData:e.data,jokeValues:e.data.value,display:!1})})).catch((function(e){console.log(e)}))},a.setVisibility=function(){a.setState({display:!0})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 col-lg-12"},c.a.createElement("h1",null,"Chuck Norris Jokes"))),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6 col-lg-2"},c.a.createElement(d,{getRandomJokeFunc:this.getRandomJoke,key:"1"})),c.a.createElement("div",{className:"col-6 col-sm-6 col-lg-2 paddingleft paddingabove"},c.a.createElement("button",{type:"button",className:"btn btn-success paddingabove",onClick:this.setVisibility},"Search Joke")),c.a.createElement("div",{className:"col-8 col-lg-8"},this.state.display&&c.a.createElement(h,{display:this.state.display,getJokeWithNameFunc:this.getJokeWithName,key:"2"}))),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6 col-lg-6"},c.a.createElement("h3",null,"  ",this.state.jokeValues.joke))))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.6bb8bc8a.chunk.js.map