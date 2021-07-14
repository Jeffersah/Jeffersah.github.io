(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{122:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return c}));var r=n(0),s=n(96),a=n(95),i=n(97),o=n(75);function l(t){if(void 0!==t.tree.children){const e=t.tree;return r.createElement("div",null,r.createElement("table",null,r.createElement("tbody",null,e.children.map((t,n)=>r.createElement("tr",{key:n,style:{verticalAlign:"top"}},r.createElement("td",{style:{border:"1px solid black",borderWidth:"0 0 1px 4px"}},e.production.patterns[n].toString()),r.createElement("td",{style:{border:"1px solid black",borderWidth:"0 0 1px 0"}},e.production.patterns[n].type===o.a.literal?r.createElement(r.Fragment,null):r.createElement(l,{tree:t})))))))}return r.createElement("span",null,t.tree.firstToken().value)}function c(){const[t,e]=r.useState("# Enter a grammar definition here\n# supports comments (Starting with '#')\n# Productions are formatted name -> literal <token> {production} ...\n\n# Example grammar for arithmetic:\n# (All left-recursive because this is an LR(1) parser)\n\n# ALL production sets MUST start with a SINGLE root production, which has the pattern root -> {someProduction} $$\nroot -> {arith} $$\n\narith -> {arith} + {multiplication}\narith -> {arith} - {multiplication}\narith -> {multiplication}\n\nmultiplication -> {multiplication} * {value}\nmultiplication -> {multiplication} / {value}\nmultiplication -> {value}\n\nvalue -> <number>\nvalue -> ( {arith} )\n"),[n,o]=r.useState("1 + 1"),[c,u]=r.useState([]),[h,d]=r.useState(void 0),[p,f]=r.useState();let m;if(r.useEffect(()=>{const t=(new i.a).tokenize(n);u(t)},[n]),r.useEffect(()=>{try{const e=s.a.FromGrammarFile(t.split("\n")),n=new a.a(e,"root");d(n)}catch(t){d(void 0)}},[t]),r.useEffect(()=>{if(void 0!==h&&h.isValid&&0!==c.length)try{var t=h.parse(c);f(t)}catch(t){f(void 0)}else f(void 0)},[c,h]),void 0===h||h.isValid)if(void 0===p);else if(a.a.isSuccessfulResponse(p))m=r.createElement(l,{tree:p});else{let t;t="$$"===p.badToken.value?"Unexpected end-of-string":`Bad token '${p.badToken.value}' at ${p.badToken.lineNumber}:${p.badToken.colNumber}`,m=r.createElement("span",{style:{color:"red"}},"Parser failed. ",t,".")}else m=r.createElement("span",{style:{color:"red"}},"Grammar is invalid."),h.isValid||void 0===h.invalidStateKey||(m=r.createElement("span",{style:{color:"red"}},"Grammar is invalid. The following state is ambiguous:",r.createElement("ul",null,h.invalidStateKey.toString().split("\r\n").map((t,e)=>r.createElement("li",{key:e},t)))));return r.createElement("div",{className:"width-1-1"},r.createElement("div",{className:"width-1-4",style:{verticalAlign:"top",border:"2px solid black"}},r.createElement("h1",null,"Grammar"),r.createElement("textarea",{wrap:"off",style:{resize:"vertical"},className:"width-1-1",value:t,onChange:t=>e(t.target.value)})),r.createElement("div",{className:"width-1-4",style:{verticalAlign:"top",border:"2px solid black"}},r.createElement("h1",null,"Input"),r.createElement("textarea",{wrap:"off",style:{resize:"vertical"},className:"width-1-1",value:n,onChange:t=>o(t.target.value)})),r.createElement("div",{className:"width-1-2",style:{verticalAlign:"top",border:"2px solid black"}},r.createElement("h1",null,"Output"),m))}},75:function(t,e,n){"use strict";var r;!function(t){t[t.production=0]="production",t[t.tokenType=1]="tokenType",t[t.literal=2]="literal",t[t.endOfInput=3]="endOfInput"}(r||(r={})),e.a=r},83:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return a}));var r=n(75);class s{constructor(t,e,n,r){this.value=t,this.type=e,this.lineNumber=n,this.colNumber=r}firstToken(){return this}allTokens(){return[this]}matches(t){switch(t.type){case r.a.literal:return t.value===this.value;case r.a.tokenType:return t.value===this.type;default:return!1}}toString(){return this.value}}class a{matches(t){return t.type===r.a.endOfInput}firstToken(){return new s("$$","endOfString",-1,-1)}allTokens(){return[this.firstToken()]}toString(){return"$$"}}},95:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n(83);class s{constructor(t){this.parsedStack=[],this.stateStack=[0],this.inputStack=[new r.a];for(let e=t.length-1;e>=0;e--)this.inputStack.push(t[e])}toString(){let t="Parsed: \r\n\t(0)";for(let e=0;e<this.parsedStack.length;e++)t+=` ${this.parsedStack[e].toString()} (${this.stateStack[e+1]})`;t+="\r\nInput: \r\n\t";for(let e=0;e<this.inputStack.length&&e<10;e++){const n=this.inputStack.length-1-e;t+=" "+this.inputStack[n].toString()}return this.inputStack.length>10&&(t+=" ..."),t}}class a{constructor(t){this.data=[],this.dataStart=0,this.dataLength=0,void 0!==t&&(this.data=[...t],this.dataStart=0,this.dataLength=t.length)}push(t){this.dataLength===this.data.length?0===this.dataStart?(this.data.push(t),this.dataLength++):(this.data=[...this.data,t],this.dataStart=0,this.dataLength++):(this.data[this.normalizeIndex(this.dataLength)]=t,this.dataLength++)}peek(){if(0===this.dataLength)throw new Error("Queue empty");return this.data[this.dataStart]}pop(){if(0===this.dataLength)throw new Error("Queue empty");const t=this.data[this.dataStart];return this.dataStart=this.normalizeIndex(1),this.dataLength--,t}length(){return this.dataLength}peekIndex(t){if(t<0||t>=this.dataLength)throw new Error("Out of range");return this.data[this.normalizeIndex(t)]}normalizeIndex(t){return(t+this.dataStart)%this.data.length}}var i=n(75);class o{constructor(t,e){this.states=new Set;let n=new a(t),r=new Set;for(;n.length()>0;){const t=n.pop();if(!this.states.has(t)&&(this.states.add(t),!t.isFinished())){var s=t.nextPattern();if(s.type===i.a.production&&!r.has(s.value)){r.add(s.value);for(const t of e.get(s.value))n.push(t.firstState)}}}}equals(t){if(this.states.size!==t.states.size)return!1;for(const e of this.states)if(!t.states.has(e))return!1;return!0}toString(){let t="";for(const e of this.states)t+=e.toString()+"\r\n";return t}}var l=n(11);class c{constructor(t,e){this.production=t,this.children=e}firstToken(){return this.children[0].firstToken()}allTokens(){let t=this.children[0].allTokens();for(let e=1;e<this.children.length;e++)t=[...t,...this.children[e].allTokens()];return t}matches(t){return t.type===i.a.production&&t.value===this.production.name}toString(){return"{"+this.production.name+"}"}}class u{constructor(t,e,n){this.id=t,this.key=e,this.owner=n,this.continuations=new Map,this.completedProduction=void 0}generateContinuations(){const t=[...this.key.states].filter(t=>!t.isFinished()),e=[...this.key.states].filter(t=>t.isFinished());if(e.length>1)return!1;1===e.length&&(this.completedProduction=e[0]);const n=Object(l.b)(t,t=>t.nextPattern(),(t,e)=>t.equals(e));for(const[t,e]of n){const n=new o(e.map(t=>t.nextState),this.owner.productions.allProductions);let r=this.owner.getOrCreate(n);if(void 0===r)return!1;this.continuations.set(t,r)}return!0}tryStep(t){const e=t.inputStack[t.inputStack.length-1],n=Array.from(this.continuations.entries()).filter(t=>e.matches(t[0]));if(1===n.length)return t.parsedStack.push(t.inputStack.pop()),t.stateStack.push(n[0][1].id),!0;if(n.length>1)return n.sort(([t],[e])=>t.priorityCompare(e)),console.log(n),t.parsedStack.push(t.inputStack.pop()),t.stateStack.push(n[0][1].id),!0;if(void 0!==this.completedProduction){const e=new Array(this.completedProduction.production.patterns.length);for(let n=this.completedProduction.production.patterns.length-1;n>=0;n--)e[n]=t.parsedStack.pop(),t.stateStack.pop();return t.inputStack.push(new c(this.completedProduction.production,e)),!0}return!1}}class h{constructor(t,e){this.productions=t,this.states=[],this.isValid=!0,this.states[0]=this.getOrCreate(new o(t.allProductions.get(e).map(t=>t.firstState),t.allProductions))}getOrCreate(t){for(const e of this.states)if(e.key.equals(t))return e;const e=new u(this.states.length,t,this);return this.states.push(e),e.generateContinuations()?e:(this.isValid&&(this.invalidStateKey=t),this.isValid=!1,void this.states.pop())}createParseState(t){return new s(t)}step(t){const e=this.states[t.stateStack[t.stateStack.length-1]];return e.tryStep(t)?0===t.inputStack.length?t.parsedStack[0]:t:{badToken:t.inputStack[t.inputStack.length-1].firstToken(),expected:Array.from(e.continuations.keys())}}parse(t){let e=this.createParseState(t);for(;;){const t=this.step(e);if(!this.isParserState(t))return t;e=t}}isParserState(t){return void 0!==t.inputStack}static isSuccessfulResponse(t){return void 0===t.badToken}}},96:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(75);class s{constructor(t,e){this.production=t,this.index=e,this.isFinished()?this.nextState=void 0:this.nextState=new s(t,e+1)}isFinished(){return this.production.patterns.length===this.index}nextPattern(){return this.production.patterns[this.index]}equals(t){return this.production===t.production&&this.index===t.index}toString(){let t="";t+=this.production.name+" -> ";for(let e=0;e<this.production.patterns.length;e++)e===this.index&&(t+=" @"),t+=" "+this.production.patterns[e];return this.index===this.production.patterns.length&&(t+=" @"),t}}class a{constructor(t,e){this.value=t,this.type=e}static Literal(t){return new a(t,r.a.literal)}static TokenType(t){return new a(t,r.a.tokenType)}static Production(t){return new a(t,r.a.production)}static EndOfInput(){return new a("$$",r.a.endOfInput)}equals(t){return this.value===t.value&&this.type===t.type}priorityCompare(t){return t.type-this.type}toString(){switch(this.type){case r.a.literal:return this.value;case r.a.endOfInput:return"$$";case r.a.tokenType:return"<"+this.value+">";case r.a.production:return"{"+this.value+"}"}}}class i{constructor(t,e){this.name=t,this.patterns=e,this.firstState=new s(this,0)}static FromString(t){let e=t.indexOf("->"),n=t.substr(0,e).trim(),r=t.substr(e+2).split(" ").map(t=>t.trim()).filter(t=>""!==t);return new i(n,r.map(this.PatternFromString))}static PatternFromString(t){return t.startsWith("{")&&t.endsWith("}")?new a(t.substr(1,t.length-2),r.a.production):t.startsWith("<")&&t.endsWith(">")?new a(t.substr(1,t.length-2),r.a.tokenType):"$$"===t?new a("$$",r.a.endOfInput):new a(t,r.a.literal)}}class o{constructor(t){this.allProductions=new Map;for(const e of t)this.allProductions.has(e.name)?this.allProductions.get(e.name).push(e):this.allProductions.set(e.name,[e])}static FromGrammarFile(t){const e=[];for(const n of t){const t=n.indexOf("#"),r=n.substr(0,-1===t?n.length:t).trim();0!==r.length&&e.push(i.FromString(r))}return new o(e)}}},97:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r,s=n(11),a=n(83);!function(t){t[t.push=0]="push",t[t.sendAndDiscard=1]="sendAndDiscard",t[t.newToken=2]="newToken",t[t.individualToken=3]="individualToken"}(r||(r={}));class i extends class extends class{constructor(){}tokenize(t){let e="",n=void 0;const s=[];let i=0,o=0,l=0,c=0,u=()=>{void 0!==n&&this.validateToken(e,n)&&s.push(new a.b(e,this.getTokenType(e,n),l,c)),e="",n=void 0,l=i,c=o};for(const s of t){const t=this.handleChar(s,e,n);switch(t){case r.push:e+=s;break;case r.sendAndDiscard:u();break;default:switch(t.op){case r.push:e+=s,n=t.state;break;case r.sendAndDiscard:n=t.state,u();break;case r.newToken:u(),e=s,n=t.state;break;case r.individualToken:u(),e=s,n=t.state,u()}}"\n"===s?(i++,o=0):o++}return u(),s}validateToken(t,e){return!0}}{constructor(){super(),this.characterClasses=[]}addCharacterClass(t,e,n,r){this.characterClasses.push({chars:t,tokenType:e,single:n,discard:r})}handleChar(t,e,n){const a=this.characterClasses.filter(e=>-1!==e.chars.indexOf(t));if(0===a.length)return r.sendAndDiscard;if(Object(s.a)(a,t=>{var e;return null!==(e=t.discard)&&void 0!==e&&e}))return r.sendAndDiscard;const i=a.filter(t=>{var e;return!1===(null!==(e=t.single)&&void 0!==e&&e)}).filter(t=>void 0===n||-1!==n.indexOf(t.tokenType));if(0!==i.length)return{op:r.push,state:i.map(t=>t.tokenType)};const o=a.filter(t=>t.single);return o.length>0?{op:r.individualToken,state:o.map(t=>t.tokenType)}:{op:r.newToken,state:a.map(t=>t.tokenType)}}getTokenType(t,e){return e[0]}validateToken(t,e){return t.length>0&&e.length>0}}{constructor(){super(),this.addCharacterClass("0123456789","number"),this.addCharacterClass("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_0123456789","string"),this.addCharacterClass(".:;'\"`!@#$%^&*()+-=[]{}\\~/?<>,","op",!0)}}}}]);
//# sourceMappingURL=15.bundle.js.map