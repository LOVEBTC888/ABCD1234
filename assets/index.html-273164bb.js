import{_ as r,M as e,p as d,q as t,N as n,a1 as c,Q as o}from"./framework-2ecd7faa.js";const B={},l=c(`<h1 id="javascript-library-for-inserting-music-in-the-browser" tabindex="-1"><a class="header-anchor" href="#javascript-library-for-inserting-music-in-the-browser" aria-hidden="true">#</a> Javascript library for inserting music in the browser.</h1><p><img src="https://paulrosen.github.io/abcjs/img/abcjs_comp_extended_08.svg" alt="abcjs"></p><p><strong>ABC Music Notation</strong> is a format for specifying sheet music using only a string of characters. For instance, the following string encodes the music that is shown below it. That music was drawn by including this library on this webpage.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>X: 1
T: Cooley&#39;s
M: 4/4
L: 1/8
K: Emin
|:D2|EB{c}BA B2 EB|~B2 AB dBAG|FDAD BDAD|FDAD dAFD|
EBBA B2 EB|B2 AB defg|afe^c dBAF|DEFD E2:|
|:gf|eB B2 efge|eB B2 gedB|A2 FA DAFA|A2 FA defg|
eB B2 eBgB|eB B2 defg|afe^c dBAF|DEFD E2:|
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),u=o("p",null,"In addition, the music can also be played by a synthesizer:",-1);function A(i,g){const s=e("render-abc"),a=e("render-audio");return d(),t("div",null,[l,n(s,{ref:"tune",abc:`X: 1
T: Cooley's
M: 4/4
L: 1/8
K: Emin
|:D2|EB{c}BA B2 EB|~B2 AB dBAG|FDAD BDAD|FDAD dAFD|
EBBA B2 EB|B2 AB defg|afe^c dBAF|DEFD E2:|
|:gf|eB B2 efge|eB B2 gedB|A2 FA DAFA|A2 FA defg|
eB B2 eBgB|eB B2 defg|afe^c dBAF|DEFD E2:|`},null,512),u,n(a,{obj:i.$refs},null,8,["obj"])])}const b=r(B,[["render",A],["__file","index.html.vue"]]);export{b as default};
