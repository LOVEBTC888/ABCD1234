import{_ as l,M as t,p as u,q as h,Q as e,t as a,N as n,a1 as i}from"./framework-2ecd7faa.js";const m={},b=e("h1",{id:"abc-music-notation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#abc-music-notation","aria-hidden":"true"},"#"),a(" ABC Music Notation")],-1),v=e("p",null,[a("The input to "),e("strong",null,"abcjs"),a(" is mostly standard ABC Music Notation. That notation is described here:")],-1),p={href:"http://abcnotation.com/learn",target:"_blank",rel:"noopener noreferrer"},f={href:"https://abcnotation.com/wiki/abc:standard",target:"_blank",rel:"noopener noreferrer"},A=i(`<p>In addition, there are many informal additions, particularly with new <code>%%</code> directives, that are supported to be compatible with other ABC software.</p><h2 id="subtractions-from-the-standard" tabindex="-1"><a class="header-anchor" href="#subtractions-from-the-standard" aria-hidden="true">#</a> Subtractions from the standard</h2><p>We&#39;ve made an attempt to be compatible with other ABC software, but there are some exceptions.</p><p>Some of the things that are supported by other packages are specific to that package&#39;s environment and don&#39;t apply to a web-based solution. Those features are not supported.</p><p>Here is a list of formatting options that will probably not be supported:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>%%abc
%%abc2pscompat
%%abcm2ps
%%autoclef
%%beginps
%%beginsvg
%%bgcolor
%%break
%%breaklimit
%%breakoneoln
%%clip
%%deco
%%decoration
%%eps
%%format
%%fullsvg
%%map
%%micronewps
%%pango
%%pdfmark
%%ps
%%select
%%tune
%%voicemap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Some of the things that are supported by other packages we&#39;ve just not gotten around to supporting yet. If you run into a feature that you would like to see, let us know.</p><h2 id="additions-to-the-standard" tabindex="-1"><a class="header-anchor" href="#additions-to-the-standard" aria-hidden="true">#</a> Additions to the standard</h2><h3 id="alternate-note-heads" tabindex="-1"><a class="header-anchor" href="#alternate-note-heads" aria-hidden="true">#</a> Alternate note heads:</h3><p>In both the K: and the V: element, you can include the parameter:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>style=rhythm
style=harmonic
style=x
style=normal
style=triangle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can also use the above as a decoration to a single note to affect just that note:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>!style=rhythm!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This changes the note heads to a different shape.</p><p>Here&#39;s a sample:</p>`,15),g=i(`<h3 id="chord-break" tabindex="-1"><a class="header-anchor" href="#chord-break" aria-hidden="true">#</a> Chord Break:</h3><p>If you want to skip a chord, then use one of the following as the chord:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;^break&quot;
&quot;^(break)&quot;
&quot;^no chord&quot;
&quot;^n.c.&quot;
&quot;^tacet&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),B=i(`<p>These are case-insensitive.</p><h3 id="mark" tabindex="-1"><a class="header-anchor" href="#mark" aria-hidden="true">#</a> mark:</h3><p>To arbitrarily add the class &quot;mark&quot; to the next note, you can use the decoration:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>!mark!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4);function _(r,x){const s=t("ExternalLinkIcon"),o=t("show-and-render-abc"),d=t("render-abc"),c=t("render-audio");return u(),h("div",null,[b,v,e("p",null,[e("a",p,[a("ABC Notation"),n(s)])]),e("p",null,[a("The working document for the standard is "),e("a",f,[a("ABC Standard"),n(s)])]),A,n(o,{abc:`X:1
T:alternate heads
M:C
L:1/8
U:n=!style=normal!
K:C treble style=rhythm
"Am" BBBB B2 B>B | "Dm" B2 B/B/B "C" B4 |"Am" B2 nGnB B2 nGnA | "Dm" nDB/B/ nDB/B/ "C" nCB/B/ nCB/B/ |B8| B0 B0 B0 B0 |]
%%text This translates to:
[M:C][K:style=normal]
[A,EAce][A,EAce][A,EAce][A,EAce] [A,EAce]2 [A,EAce]>[A,EAce] |[DAdf]2 [DAdf]/[DAdf]/[DAdf] [CEGce]4 |[A,EAce]2 GA [A,EAce] GA |D[DAdf]/[DAdf]/ D[DAdf]/[DAdf]/ C [CEGce]/[CEGce]/ C[CEGce]/[CEGce]/ |[CEGce]8 | [CEGce]2 [CEGce]2 [CEGce]2 [CEGce]2 |]
GAB2 !style=harmonic![gb]4|GAB2 [K: style=harmonic]gbgb|
[K: style=x]
C/A,/ C/C/E C/zz2|
w:Rock-y did-nt like that
`}),g,n(d,{ref:"tune",abc:`X:1
T:Struttin With Some BBQ
C:1923 Lil Hardin Armstrong
M:4/4
L:1/8
K:F
"G7"d4AFGA|dA-A6|"C7"cB"^N.C."GF EDC=B,|_B,2zF EFAc|
`},null,8,["abc"]),n(c,{obj:r.$refs},null,8,["obj"]),B,n(d,{abc:`X:1
K:C
e!mark!f|g
`})])}const k=l(m,[["render",_],["__file","abc-notation.html.vue"]]);export{k as default};
