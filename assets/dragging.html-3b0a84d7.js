import{_ as i,M as a,p as s,q as o,Q as t,t as e,N as l,V as d,a1 as c}from"./framework-2ecd7faa.js";const r={},u=c(`<h1 id="selecting-and-dragging-elements" tabindex="-1"><a class="header-anchor" href="#selecting-and-dragging-elements" aria-hidden="true">#</a> Selecting and Dragging Elements</h1><p>You can select which type of elements on the page you want to be selectable. If the element is a note, then it can also be draggable.</p><h2 id="dragging" tabindex="-1"><a class="header-anchor" href="#dragging" aria-hidden="true">#</a> Dragging</h2><p>Using the option:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>abcjs.renderAbc(..., ..., { dragging: true, clickListener: function() {...} })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>turns on dragging. The user will be able to click on an element, (or use the tab key to go through the elements) and, if it is a draggable element, move it visually. When the user has finished moving the element, the click listener is called. The underlying music is not changed to reflect the user&#39;s action. The clickListener function should modify the ABC string and rerender if the user has made a change.</p><p>The fifth argument in the clickListener function is the results of the drag, if any. It is an object that looks like:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  step: number,
  setSelection: function,
  index: number, 
  max: number,
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>step</code> are the number of visual positions the note was dragged. A negative number means that the note was dragged flatter and positive means it was dragged sharper. This is a purely visual count. That is, if the note was on a line and a <code>1</code> is returned, then the note is now on the space above it. <code>setSelection</code> is a callback to the selection function. You can call that to change the selection programmatically. <code>currentIndex</code> is which item is selected. This number doesn&#39;t mean anything on its own, but is used to call the <code>setSelection</code> function. <code>max</code> is the number of selectable items in the music.</p><h2 id="styles" tabindex="-1"><a class="header-anchor" href="#styles" aria-hidden="true">#</a> Styles</h2><p>Using the options:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>abcjs.renderAbc(..., ..., { selectionColor: cssColor, dragColor: cssColor })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>where <code>cssColor</code> is a legal format for a color allows you to control the look of the selection and dragging. For instance, you can use <code>&quot;blue&quot;</code> or <code>#0000ff</code>.</p><h2 id="specifying-what-is-selectable" tabindex="-1"><a class="header-anchor" href="#specifying-what-is-selectable" aria-hidden="true">#</a> Specifying what is selectable.</h2><p>The following categories of musical items can be set to be selectable independently of each other:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	&quot;author&quot;
	&quot;bar&quot;
	&quot;brace&quot;
	&quot;clef&quot;
	&quot;composer&quot;
	&quot;dynamicDecoration&quot;
	&quot;ending&quot;
	&quot;extraText&quot;
	&quot;freeText&quot;
	&quot;keySignature&quot;
	&quot;note&quot;
	&quot;part&quot;
	&quot;partOrder&quot;
	&quot;rhythm&quot;
	&quot;slur&quot;
	&quot;subtitle&quot;
	&quot;tempo&quot;
	&quot;timeSignature&quot;
	&quot;title&quot;
	&quot;unalignedWords&quot;
	&quot;voiceName&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Using the option:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>abcjs.renderAbc(..., ..., { selectTypes: [] })
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>where the array is a list of items you want to allow the user to select. (Rests are included in the note category.)</p><p>If, instead of an array, you use the value <code>{ selectTypes: true }</code> then all of the items are selectable.</p><p>If, instead of an array, you use the value <code>{ selectTypes: false }</code> then none of the items are selectable.</p>`,21),h=t("code",null,"selectTypes",-1),m=t("code",null,"false",-1);function v(g,b){const n=a("RouterLink");return s(),o("div",null,[u,t("p",null,[e("If "),h,e(" is not passed in, then nothing is selectable (the same behavior as passing "),m,e("), but notes and rests are clickable. (That is, the "),l(n,{to:"/visual/click-listener.html"},{default:d(()=>[e("clickListener")]),_:1}),e(" function will be called on a click. ) This mimics the previous behavior so it is backwards compatible.")])])}const f=i(r,[["render",v],["__file","dragging.html.vue"]]);export{f as default};
