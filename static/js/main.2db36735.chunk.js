(this["webpackJsonpstar-db"]=this["webpackJsonpstar-db"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,r){},,,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(2),s=r(9),a=r.n(s),c=(r(14),r(0)),i=function(){return Object(c.jsxs)("div",{className:"header d-flex",children:[Object(c.jsx)("h3",{children:Object(c.jsx)("a",{href:"#",children:"Star DB"})}),Object(c.jsxs)("ul",{className:"d-flex",children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#",children:"People"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#",children:"Planets"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"#",children:"Starships"})})]})]})},u=r(3),l=r(4),o=r(7),p=r(6),h=r(1),j=r.n(h),d=r(5),m=function(){function e(){Object(u.a)(this,e),this._apiBase="https://swapi.dev/api"}return Object(l.a)(e,[{key:"getResource",value:function(){var e=Object(d.a)(j.a.mark((function e(t){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._apiBase).concat(t));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t)+", received ".concat(r.status));case 5:return e.next=7,r.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAllPeople",value:function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/people/");case 2:return t=e.sent,e.abrupt("return",t.results.map(this._transformPerson));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getPerson",value:function(){var e=Object(d.a)(j.a.mark((function e(t){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/people/".concat(t,"/"));case 2:return r=e.sent,e.abrupt("return",this._transformPerson(r));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAllPlanets",value:function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/planets/");case 2:return t=e.sent,e.abrupt("return",t.results.map(this._transformPlanet));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getPlanet",value:function(){var e=Object(d.a)(j.a.mark((function e(t){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/planets/".concat(t,"/"));case 2:return r=e.sent,e.abrupt("return",this._transformPlanet(r));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAllStarships",value:function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/starships/");case 2:return t=e.sent,e.abrupt("return",t.results.map(this._transformStarship));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getStarship",value:function(){var e=Object(d.a)(j.a.mark((function e(t){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/starships/".concat(t,"/"));case 2:return r=e.sent,e.abrupt("return",this._transformStarShip(r));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_extractId",value:function(e){return e.url.match(/\/([0-9]*)\/$/)[1]}},{key:"_transformPlanet",value:function(e){return{id:this._extractId(e),name:e.name,population:e.population,rotationPeriod:e.rotation_period,diameter:e.diameter}}},{key:"_transformStarShip",value:function(e){return{id:this._extractId(e),name:e.name,model:e.model,manufacturer:e.manufacturer,costInCredits:e.costInCredits,length:e.length,crew:e.crew,passengers:e.passengers,cargoCapacity:e.cargoCapacity}}},{key:"_transformPerson",value:function(e){return{id:this._extractId(e),name:e.name,gender:e.gender,birthYear:e.birthYear,eyeColor:e.eyeColor}}}]),e}(),b=(r(17),function(e){Object(o.a)(r,e);var t=Object(p.a)(r);function r(){var e;return Object(u.a)(this,r),(e=t.call(this)).swapiService=new m,e.state={planet:{}},e.onPlanetLoaded=function(t){e.setState({planet:t})},e.updatePlanet(),e}return Object(l.a)(r,[{key:"updatePlanet",value:function(){var e=Math.floor(25*Math.random()+2);this.swapiService.getPlanet(e).then(this.onPlanetLoaded)}},{key:"render",value:function(){var e=this.state.planet,t=e.id,r=e.name,n=e.population,s=e.rotationPeriod,a=e.diameter;return Object(c.jsxs)("div",{className:"random-planet jumbotron rounded",children:[Object(c.jsx)("img",{className:"planet-image",alt:"",src:"https://starwars-visualguide.com/assets/img/planets/".concat(t,".jpg")}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:r}),Object(c.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(c.jsxs)("li",{className:"list-group-item",children:[Object(c.jsx)("span",{className:"term",children:"Population"}),Object(c.jsx)("span",{children:n})]}),Object(c.jsxs)("li",{className:"list-group-item",children:[Object(c.jsx)("span",{className:"term",children:"Rotation Period"}),Object(c.jsx)("span",{children:s})]}),Object(c.jsxs)("li",{className:"list-group-item",children:[Object(c.jsx)("span",{className:"term",children:"Diameter"}),Object(c.jsx)("span",{children:a})]})]})]})]})}}]),r}(n.Component)),f=(r(18),function(e){Object(o.a)(r,e);var t=Object(p.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return Object(c.jsxs)("ul",{className:"item-list list-group",children:[Object(c.jsx)("li",{className:"list-group-item",children:"Luke Skywalker"}),Object(c.jsx)("li",{className:"list-group-item",children:"Darth Vader"}),Object(c.jsx)("li",{className:"list-group-item",children:"R2-D2"})]})}}]),r}(n.Component)),x=(r(19),function(e){Object(o.a)(r,e);var t=Object(p.a)(r);function r(){return Object(u.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"person-details card",children:[Object(c.jsx)("img",{className:"person-image",alt:"",src:"https://starwars-visualguide.com/assets/img/characters/3.jpg"}),Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("h4",{children:"R2-D2"}),Object(c.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(c.jsxs)("li",{className:"list-group-item",children:[Object(c.jsx)("span",{className:"term",children:"Gender"}),Object(c.jsx)("span",{children:"male"})]}),Object(c.jsxs)("li",{className:"list-group-item",children:[Object(c.jsx)("span",{className:"term",children:"Birth Year"}),Object(c.jsx)("span",{children:"43"})]}),Object(c.jsxs)("li",{className:"list-group-item",children:[Object(c.jsx)("span",{className:"term",children:"Eye Color"}),Object(c.jsx)("span",{children:"red"})]})]})]})]})}}]),r}(n.Component)),O=(r(20),function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(i,{}),Object(c.jsx)(b,{}),Object(c.jsxs)("div",{className:"row mb2",children:[Object(c.jsx)("div",{className:"col-md-6",children:Object(c.jsx)(f,{})}),Object(c.jsx)("div",{className:"col-md-6",children:Object(c.jsx)(x,{})})]})]})});a.a.render(Object(c.jsx)(O,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.2db36735.chunk.js.map