const cheerio = require('cheerio');

module.exports = (html) => {
  const $ = cheerio.load(html);

  var contents = [];

  const katas = $('div .list-item.solutions');

  katas.each(function(i, elem) {
    var kataLevel = $(this)
      .find($('.inner-small-hex.is-extra-wide'))
      .text();

    var kataLink = `https://www.codewars.com/${$(this)
      .find('a')
      .attr('href')}`;

    console.log(kataLevel, kataLink);

    // var kataLevel = $('div .inner-small-hex.is-extra-wide').text();
    // contents.push(kataLevel);
  });

  // console.log(contents);
};

{
  /* <div class="list-item solutions"><div class="item-title"><div border="false" class="small-hex is-extra-wide is-inline mrm is-white-rank"><div class="inner-small-hex is-extra-wide "><span>7 kyu</span></div></div><a href="/kata/57ecf6efc7fe13eb070000e1">The Office I - Outed</a></div><h6>JavaScript:</h6><div class="markdown"><pre><code class="mbx"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">outed</span>(<span class="hljs-params">meet, boss</span>)</span>{
  <span class="hljs-keyword">var</span> score = <span class="hljs-number">0</span>, count = <span class="hljs-number">0</span>;

  <span class="hljs-keyword">for</span>(<span class="hljs-keyword">let</span> prop <span class="hljs-keyword">in</span> meet){
    <span class="hljs-keyword">if</span>(prop === boss) score += meet[prop] * <span class="hljs-number">2</span>
    <span class="hljs-keyword">else</span> score += meet[prop]

    count++;
  }

  <span class="hljs-keyword">return</span> score / count &gt; <span class="hljs-number">5</span> ? <span class="hljs-string">&apos;Nice Work Champ!&apos;</span> : <span class="hljs-string">&apos;Get Out Now!&apos;</span>;
}</code></pre></div><ul class="bulleted-text mbm"><li><time data-text-time="1543899675">1 week ago</time></li><li><span class="bullet"></span><a class="is-alt" href="/kata/the-office-i-outed/train/javascript/5c0606c5325b940d5a00018a">Refactor</a></li><li><span class="bullet"></span><a class="is-alt" href="/kata/reviews/57ed2b78d96ebf3aac0000ed/groups/5c060a2081c9a2668a00061e">Discuss</a></li></ul></div><div class="list-item solutions"><div class="item-title"><div border="false" class="small-hex is-extra-wide is-inline mrmis-white-rank"><div class="inner-small-hex is-extra-wide "><span>8 kyu</span></div></div><a href="/kata/59ca8246d751df55cc00014c">Is he gonna survive?</a></div><h6>JavaScript:</h6><div class="markdown"><pre><code class="mbx"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">hero</span><span class="hljs-params">(bullets, dragons)</span></span>{
  <span class="hljs-keyword">return</span> bullets &gt;= dragons * <span class="hljs-number">2</span>
}
</code></pre></div><ul class="bulleted-text mbm"><li><time data-text-time="1543898660">1 week ago</time></li><li><span class="bullet"></span><a class="is-alt" href="/kata/is-he-gonna-survive/train/javascript/5c060570a7c77a57db000154">Refactor</a></li><li><span class="bullet"></span><a class="is-alt" href="/kata/reviews/59ca824a9754d1042d001c8e/groups/59cce7bd00b8c4a30c000aec">Discuss</a></li></ul></div><div class="list-item solutions"><div class="item-title"><div border="false" class="small-hex is-extra-wide is-inline mrmis-yellow-rank"><div class="inner-small-hex is-extra-wide "><span>5 kyu</span></div></div><a href="/kata/5a3267b2ee1aaead3d000037">1-800-CODE-WAR</a></div><h6>JavaScript:</h6><div class="markdown"><pre><code class="mbx"><span class="hljs-keyword">const</span> lookupTable = {
  <span class="hljs-string">&quot;A&quot;</span>: <span class="hljs-string">&apos;2&apos;</span>,
  <span class="hljs-string">&quot;B&quot;</span>: <span class="hljs-string">&apos;2&apos;</span>,
  <span class="hljs-string">&quot;C&quot;</span>: <span class="hljs-string">&apos;2&apos;</span>,
  <span class="hljs-string">&quot;D&quot;</span>: <span class="hljs-string">&apos;3&apos;</span>,
  <span class="hljs-string">&quot;E&quot;</span>: <span class="hljs-string">&apos;3&apos;</span>,
  <span class="hljs-string">&quot;F&quot;</span>: <span class="hljs-string">&apos;3&apos;</span>,
  <span class="hljs-string">&quot;G&quot;</span>: <span class="hljs-string">&apos;4&apos;</span>,
  <span class="hljs-string">&quot;H&quot;</span>: <span class="hljs-string">&apos;4&apos;</span>,
  <span class="hljs-string">&quot;I&quot;</span>: <span class="hljs-string">&apos;4&apos;</span>,
  <span class="hljs-string">&quot;J&quot;</span>: <span class="hljs-string">&apos;5&apos;</span>,
  <span class="hljs-string">&quot;K&quot;</span>: <span class="hljs-string">&apos;5&apos;</span>,
  <span class="hljs-string">&quot;L&quot;</span>: <span class="hljs-string">&apos;5&apos;</span>,
  <span class="hljs-string">&quot;M&quot;</span>: <span class="hljs-string">&apos;6&apos;</span>,
  <span class="hljs-string">&quot;N&quot;</span>: <span class="hljs-string">&apos;6&apos;</span>,
  <span class="hljs-string">&quot;O&quot;</span>: <span class="hljs-string">&apos;6&apos;</span>,
  <span class="hljs-string">&quot;P&quot;</span>: <span class="hljs-string">&apos;7&apos;</span>,
  <span class="hljs-string">&quot;Q&quot;</span>: <span class="hljs-string">&apos;7&apos;</span>,
  <span class="hljs-string">&quot;R&quot;</span>: <span class="hljs-string">&apos;7&apos;</span>,
  <span class="hljs-string">&quot;S&quot;</span>: <span class="hljs-string">&apos;7&apos;</span>,
  <span class="hljs-string">&quot;T&quot;</span>: <span class="hljs-string">&apos;8&apos;</span>,
  <span class="hljs-string">&quot;U&quot;</span>: <span class="hljs-string">&apos;8&apos;</span>,
  <span class="hljs-string">&quot;V&quot;</span>: <span class="hljs-string">&apos;8&apos;</span>,
  <span class="hljs-string">&quot;W&quot;</span>: <span class="hljs-string">&apos;9&apos;</span>,
  <span class="hljs-string">&quot;X&quot;</span>: <span class="hljs-string">&apos;9&apos;</span>,
  <span class="hljs-string">&quot;Y&quot;</span>: <span class="hljs-string">&apos;9&apos;</span>,
  <span class="hljs-string">&quot;Z&quot;</span>: <span class="hljs-string">&apos;9&apos;</span>,
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">check1800</span>(<span class="hljs-params">str</span>) </span>{
  <span class="hljs-keyword">var</span> phoneNumCombos = [[], []];

  <span class="hljs-keyword">var</span> splitStr = str.split(<span class="hljs-string">&apos;-&apos;</span>).slice(<span class="hljs-number">-2</span>).join(<span class="hljs-string">&apos;&apos;</span>)


  <span class="hljs-keyword">const</span> phoneNums = getNumCombo([splitStr])
  <span class="hljs-keyword">const</span> approvedPhoneNums = getNumCombo(Preloaded.WORDS)


  approvedPhoneNums.forEach(<span class="hljs-function">(<span class="hljs-params">approvedPhoneNum, approvedPhoneNumIdx</span>) =&gt;</span> {
    <span class="hljs-keyword">if</span>(approvedPhoneNum === phoneNums[<span class="hljs-number">0</span>].slice(<span class="hljs-number">0</span>, <span class="hljs-number">3</span>) || approvedPhoneNum === phoneNums[<span class="hljs-number">0</span>].slice(<span class="hljs-number">0</span>, <span class="hljs-number">4</span>)){
      phoneNumCombos[<span class="hljs-number">0</span>].push(Preloaded.WORDS[approvedPhoneNumIdx])
    }

    <span class="hljs-keyword">if</span>(approvedPhoneNum === phoneNums[<span class="hljs-number">0</span>].slice(<span class="hljs-number">-3</span>) || approvedPhoneNum === phoneNums[<span class="hljs-number">0</span>].slice(<span class="hljs-number">-4</span>)){
      phoneNumCombos[<span class="hljs-number">1</span>].push(Preloaded.WORDS[approvedPhoneNumIdx])
    }
  })

  <span class="hljs-keyword">var</span> result = []

  phoneNumCombos[<span class="hljs-number">0</span>].forEach(<span class="hljs-function"><span class="hljs-params">phoneNumCombo1</span> =&gt;</span> {
    phoneNumCombos[<span class="hljs-number">1</span>].forEach(<span class="hljs-function"><span class="hljs-params">phoneNumCombo2</span> =&gt;</span> {
      <span class="hljs-keyword">const</span> tempStr = <span class="hljs-string">`1-800-<span class="hljs-subst">${phoneNumCombo1}</span>-<span class="hljs-subst">${phoneNumCombo2}</span>`</span>
      <span class="hljs-keyword">if</span>(tempStr.length === <span class="hljs-number">14</span> ) result.push(tempStr)
    })
  })

  <span class="hljs-keyword">return</span> result
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getNumCombo</span>(<span class="hljs-params">wordArray</span>) </span>{
  <span class="hljs-keyword">var</span> numArray = <span class="hljs-built_in">Array</span>(wordArray.length).fill(<span class="hljs-string">&apos;&apos;</span>)

  wordArray.forEach(<span class="hljs-function">(<span class="hljs-params">word, wordIdx</span>) =&gt;</span> {
    word.split(<span class="hljs-string">&apos;&apos;</span>).forEach(<span class="hljs-function"><span class="hljs-params">letter</span> =&gt;</span> {
        numArray[wordIdx] += lookupTable[letter]
    })
  })

  <span class="hljs-keyword">return</span> numArray
}</code></pre></div><ul class="bulleted-text mbm"><li><time data-text-time="1543898299">1 week ago</time></li><li><span class="bullet"></span><a class="is-alt" href="/kata/1-800-code-war/train/javascript/5c0604914f380311c400015c">Refactor</a></li><li><span class="bullet"></span><a class="is-alt" href="/kata/reviews/5a38edbeccd9e36dc90019ae/groups/5c0604be87fb5def90001b35">Discuss</a></li></ul><div class="markdown"><pre><code class="mbx"><span class="hljs-keyword">const</span> lookupTable = {
  <span class="hljs-string">&quot;A&quot;</span>: <span class="hljs-string">&apos;2&apos;</span>,
  <span class="hljs-string">&quot;B&quot;</span>: <span class="hljs-string">&apos;2&apos;</span>,
  <span class="hljs-string">&quot;C&quot;</span>: <span class="hljs-string">&apos;2&apos;</span>,
  <span class="hljs-string">&quot;D&quot;</span>: <span class="hljs-string">&apos;3&apos;</span>,
  <span class="hljs-string">&quot;E&quot;</span>: <span class="hljs-string">&apos;3&apos;</span>,
  <span class="hljs-string">&quot;F&quot;</span>: <span class="hljs-string">&apos;3&apos;</span>,
  <span class="hljs-string">&quot;G&quot;</span>: <span class="hljs-string">&apos;4&apos;</span>,
  <span class="hljs-string">&quot;H&quot;</span>: <span class="hljs-string">&apos;4&apos;</span>,
  <span class="hljs-string">&quot;I&quot;</span>: <span class="hljs-string">&apos;4&apos;</span>,
  <span class="hljs-string">&quot;J&quot;</span>: <span class="hljs-string">&apos;5&apos;</span>,
  <span class="hljs-string">&quot;K&quot;</span>: <span class="hljs-string">&apos;5&apos;</span>,
  <span class="hljs-string">&quot;L&quot;</span>: <span class="hljs-string">&apos;5&apos;</span>,
  <span class="hljs-string">&quot;M&quot;</span>: <span class="hljs-string">&apos;6&apos;</span>,
  <span class="hljs-string">&quot;N&quot;</span>: <span class="hljs-string">&apos;6&apos;</span>,
  <span class="hljs-string">&quot;O&quot;</span>: <span class="hljs-string">&apos;6&apos;</span>,
  <span class="hljs-string">&quot;P&quot;</span>: <span class="hljs-string">&apos;7&apos;</span>,
  <span class="hljs-string">&quot;Q&quot;</span>: <span class="hljs-string">&apos;7&apos;</span>,
  <span class="hljs-string">&quot;R&quot;</span>: <span class="hljs-string">&apos;7&apos;</span>,
  <span class="hljs-string">&quot;S&quot;</span>: <span class="hljs-string">&apos;7&apos;</span>,
  <span class="hljs-string">&quot;T&quot;</span>: <span class="hljs-string">&apos;8&apos;</span>,
  <span class="hljs-string">&quot;U&quot;</span>: <span class="hljs-string">&apos;8&apos;</span>,
  <span class="hljs-string">&quot;V&quot;</span>: <span class="hljs-string">&apos;8&apos;</span>,
  <span class="hljs-string">&quot;W&quot;</span>: <span class="hljs-string">&apos;9&apos;</span>,
  <span class="hljs-string">&quot;X&quot;</span>: <span class="hljs-string">&apos;9&apos;</span>,
  <span class="hljs-string">&quot;Y&quot;</span>: <span class="hljs-string">&apos;9&apos;</span>,
  <span class="hljs-string">&quot;Z&quot;</span>: <span class="hljs-string">&apos;9&apos;</span>,
}

<span class="hljs-keyword">const</span> approvedWordList = [<span class="hljs-string">&apos;ABC&apos;</span>, <span class="hljs-string">&apos;PAN&apos;</span>, <span class="hljs-string">&apos;BCD&apos;</span>, <span class="hljs-string">&apos;ACT&apos;</span>, <span class="hljs-string">&apos;BAT&apos;</span>, <span class="hljs-string">&apos;CAT&apos;</span>, <span class="hljs-string">&apos;TACT&apos;</span>, <span class="hljs-string">&apos;PAWS&apos;</span>, <span class="hljs-string">&apos;WAR&apos;</span>, <span class="hljs-string">&apos;RAM&apos;</span>, <span class="hljs-string">&apos;RAN&apos;</span>, <span class="hljs-string">&apos;ZIT&apos;</span>, <span class="hljs-string">&apos;CRIT&apos;</span>, <span class="hljs-string">&apos;SAWS&apos;</span>, <span class="hljs-string">&apos;CODE&apos;</span>, <span class="hljs-string">&apos;VIT&apos;</span>, <span class="hljs-string">&apos;ABLE&apos;</span>, <span class="hljs-string">&apos;WARS&apos;</span>, <span class="hljs-string">&apos;ZAP&apos;</span>, <span class="hljs-string">&apos;YAP&apos;</span>, <span class="hljs-string">&apos;MAP&apos;</span>, <span class="hljs-string">&apos;RANT&apos;</span>,  <span class="hljs-string">&apos;WAS&apos;</span>]

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">check1800</span>(<span class="hljs-params">str</span>) </span>{
  <span class="hljs-keyword">var</span> phoneNumCombos = [[], []];

  <span class="hljs-keyword">var</span> splitStr = str.split(<span class="hljs-string">&apos;-&apos;</span>).slice(<span class="hljs-number">-2</span>).join(<span class="hljs-string">&apos;&apos;</span>)


  <span class="hljs-keyword">const</span> phoneNums = getNumCombo([splitStr])
  <span class="hljs-keyword">const</span> approvedPhoneNums = getNumCombo(Preloaded.WORDS)


  approvedPhoneNums.forEach(<span class="hljs-function">(<span class="hljs-params">approvedPhoneNum, approvedPhoneNumIdx</span>) =&gt;</span> {
    <span class="hljs-keyword">if</span>(approvedPhoneNum === phoneNums[<span class="hljs-number">0</span>].slice(<span class="hljs-number">0</span>, <span class="hljs-number">3</span>) || approvedPhoneNum === phoneNums[<span class="hljs-number">0</span>].slice(<span class="hljs-number">0</span>, <span class="hljs-number">4</span>)){
      phoneNumCombos[<span class="hljs-number">0</span>].push(Preloaded.WORDS[approvedPhoneNumIdx])
    }

    <span class="hljs-keyword">if</span>(approvedPhoneNum === phoneNums[<span class="hljs-number">0</span>].slice(<span class="hljs-number">-3</span>) || approvedPhoneNum === phoneNums[<span class="hljs-number">0</span>].slice(<span class="hljs-number">-4</span>)){
      phoneNumCombos[<span class="hljs-number">1</span>].push(Preloaded.WORDS[approvedPhoneNumIdx])
    }
  })

  <span class="hljs-keyword">var</span> result = []

  phoneNumCombos[<span class="hljs-number">0</span>].forEach(<span class="hljs-function"><span class="hljs-params">phoneNumCombo1</span> =&gt;</span> {
    phoneNumCombos[<span class="hljs-number">1</span>].forEach(<span class="hljs-function"><span class="hljs-params">phoneNumCombo2</span> =&gt;</span> {
      <span class="hljs-keyword">const</span> tempStr = <span class="hljs-string">`1-800-<span class="hljs-subst">${phoneNumCombo1}</span>-<span class="hljs-subst">${phoneNumCombo2}</span>`</span>
      <span class="hljs-keyword">if</span>(tempStr.length === <span class="hljs-number">14</span> ) result.push(tempStr)
    })
  })

  <span class="hljs-keyword">return</span> result
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getNumCombo</span>(<span class="hljs-params">wordArray</span>) </span>{
  <span class="hljs-comment">// create an array of array.length, fill with 0&apos;s</span>
  <span class="hljs-keyword">var</span> numArray = <span class="hljs-built_in">Array</span>(wordArray.length).fill(<span class="hljs-string">&apos;&apos;</span>)

  <span class="hljs-comment">// forEach (word, wordIdx)</span>
  wordArray.forEach(<span class="hljs-function">(<span class="hljs-params">word, wordIdx</span>) =&gt;</span> {
    <span class="hljs-comment">// split word into letters</span>
      <span class="hljs-comment">// forEach letter</span>
    word.split(<span class="hljs-string">&apos;&apos;</span>).forEach(<span class="hljs-function"><span class="hljs-params">letter</span> =&gt;</span> {
        numArray[wordIdx] += lookupTable[letter]
    })
  })

  <span class="hljs-keyword">return</span> numArray
}</code></pre></div><ul class="bulleted-text mbm"><li><time data-text-time="1543898114">1 week ago</time></li><li><span class="bullet"></span><a class="is-alt" href="/kata/1-800-code-war/train/javascript/5c0229db9c65cfc73d000081">Refactor</a></li><li><span class="bullet"></span><a class="is-alt" href="/kata/reviews/5a38edbeccd9e36dc90019ae/groups/5c06040887fb5d67b0001b30">Discuss</a></li></ul></div><div class="list-item solutions"><div class="item-title"><div border="false" class="small-hex is-extra-wide is-inline mrm is-yellow-rank"><div class="inner-small-hex is-extra-wide "><span>6 kyu</span></div></div><a href="/kata/57f6051c3ff02f3b7300008b">The Office V - Find a Chair </a></div><h6>JavaScript:</h6><div class="markdown"><pre><code class="mbx"><span class="hljs-function"><spanclass="hljs-keyword">function</span> <span class="hljs-title">meeting</span>(<span class="hljs-params">rooms, need</span>)</span>{
  <span class="hljs-keyword">var</span> total = <span class="hljs-number">0</span>,
    result = [];

  <span class="hljs-keyword">if</span> (need &lt; <span class="hljs-number">1</span>) {
     <span class="hljs-keyword">return</span> <span class="hljs-string">&apos;Game On&apos;</span>
  } <span class="hljs-keyword">else</span> {
    <span class="hljs-keyword">for</span>(<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; rooms.length; i++){
      <span class="hljs-keyword">let</span> occupants = rooms[i][<span class="hljs-number">0</span>].length
        <span class="hljs-built_in">console</span>.log(need, rooms[i], occupants, rooms[i][<span class="hljs-number">1</span>])

      <span class="hljs-keyword">if</span> (rooms[i][<span class="hljs-number">1</span>] - occupants &gt; <span class="hljs-number">0</span>){
        <span class="hljs-keyword">let</span> chairs = rooms[i][<span class="hljs-number">1</span>] - occupants

        <span class="hljs-keyword">let</span> remainder = need - total

        total += chairs

        <span class="hljs-keyword">if</span> (total &gt;= need){
          result.push(remainder)
          <span class="hljs-keyword">return</span> result

        } <span class="hljs-keyword">else</span> {
          result.push(chairs)
        }


      } <span class="hljs-keyword">else</span> {
        result.push(<span class="hljs-number">0</span>)
      }
    }
  }

  <span class="hljs-keyword">return</span> <span class="hljs-string">&apos;Not enough!&apos;</span>
}</code></pre></div><ul class="bulleted-text mbm"><li><time data-text-time="1543644837">2 weeks ago</time></li><li><span class="bullet"></span><a class="is-alt" href="/kata/the-office-v-find-a-chair/train/javascript/5c02182971725688c60000d3">Refactor</a></li><li><span class="bullet"></span><a class="is-alt" href="/kata/reviews/57f6170ac9c377b9170000fb/groups/5c0226a9bf0ea756d70001a3">Discuss</a></li></ul></div><div class="list-item solutions"><div class="item-title"><div border="false" class="small-hex is-extra-wide is-inline mrm is-white-rank"><div class="inner-small-hex is-extra-wide "><span>7 kyu</span></div></div><a href="/kata/555eded1ad94b00403000071">Sum of the first nth term of Series</a></div><h6>JavaScript:</h6><div class="markdown"><pre><code class="mbx"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">SeriesSum</span>(<span class="hljs-params">num</span>) </span>{
  <span class="hljs-keyword">var</span> total = <span class="hljs-number">0</span>
  <span class="hljs-keyword">for</span>(<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; num; i++){
    total += <span class="hljs-number">1</span> / (<span class="hljs-number">1</span> + (<span class="hljs-number">3</span> * i))
  }

  <span class="hljs-keyword">return</span> total.toFixed(<span class="hljs-number">2</span>).toString()
}</code></pre></div><ul class="bulleted-text mbm"><li><time data-text-time="1543639588">2 weeks ago</time></li><li><span class="bullet"></span><a class="is-alt" href="/kata/sum-of-the-first-nth-term-of-series/train/javascript/5c0210fb0e7c89b2500000bc">Refactor</a></li><li><span class="bullet"></span><a class="is-alt" href="/kata/reviews/555ee48d4acbe4782c0000a4/groups/5c02122a87fb5d0e53001afd">Discuss</a></li></ul><div class="markdown"><pre><code class="mbx"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">SeriesSum</span>(<span class="hljs-params">num</span>) </span>{
  <span class="hljs-keyword">var</span> total = <span class="hljs-number">0</span>, denom = <span class="hljs-number">1</span>;
  <span class="hljs-keyword">for</span>(<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; num; i++){
    total += <span class="hljs-number">1</span> / denom
    denom += <span class="hljs-number">3</span>;
  }

  <span class="hljs-keyword">return</span> total.toFixed(<span class="hljs-number">2</span>).toString()
}</code></pre></div><ul class="bulleted-text mbm"><li><time data-text-time="1543639033">2 weeks ago</time></li><li><span class="bullet"></span><a class="is-alt" href="/kata/sum-of-the-first-nth-term-of-series/train/javascript/5c0207c74f3803549d0000af">Refactor</a></li><li><span class="bullet"></span><a class="is-alt" href="/kata/reviews/555ee48d4acbe4782c0000a4/groups/5c020fffbf0ea7a288000111">Discuss</a></li></ul></div><div class="list-item solutions"><div class="item-title"><div border="false" class="small-hex is-extra-wide is-inline mrm is-yellow-rank"><div class="inner-small-hex is-extra-wide "><span>5 kyu</span></div></div><a href="/kata/5263a84ffcadb968b6000513">Square Matrix Multiplication</a></div><h6>JavaScript:</h6><div class="markdown"><pre><code class="mbx"><span class="hljs-keyword">function</span> matrixMultiplication(a, b) {
  var result = [],
    maxP = b[<span class="hljs-number">0</span>].length - <span class="hljs-number">1</span>

  a.<span class="hljs-keyword">forEach</span>((<span class="hljs-keyword">row</span>, n) =&gt; {
    let <span class="hljs-keyword">temp</span> = [],
      total = <span class="hljs-number">0</span>,
      p = <span class="hljs-number">0</span>,
      maxM = <span class="hljs-keyword">row</span>.length - <span class="hljs-number">1</span>;

    <span class="hljs-keyword">for</span>(let m = <span class="hljs-number">0</span>; p &lt;= maxP; m++) {
      total += <span class="hljs-keyword">row</span>[m] * b[m][p]

      <span class="hljs-keyword">if</span>(m &gt;= maxM) {
        <span class="hljs-keyword">temp</span>.push(total)
        total = <span class="hljs-number">0</span>;
        m = <span class="hljs-number">-1</span>;
        p++;
      }

    }

    result.push(<span class="hljs-keyword">temp</span>)
  })

  <span class="hljs-keyword">return</span> result;
}</code></pre></div><ul class="bulleted-text mbm"><li><time data-text-time="1543631718">2 weeks ago</time></li><li><span class="bullet"></span><a class="is-alt" href="/kata/square-matrix-multiplication/train/javascript/5c00b5daa7c77a9a290000ea">Refactor</a></li><li><span class="bullet"></span><a class="is-alt" href="/kata/reviews/5263ac339e0f40abd40004fb/groups/5c01f36a81c9a2d0fd0012be">Discuss</a></li></ul></div><div class="list-item solutions"><div class="item-title"><div border="false" class="small-hex is-extra-wide is-inline mrm is-yellow-rank"><div class="inner-small-hex is-extra-wide "><span>6 kyu</span></div></div><a href="/kata/5266876b8f4bf2da9b000362">Who likes it?</a></div><h6>JavaScript:</h6><div class="markdown"><pre><code class="mbx"><span class="hljs-function"><spanclass="hljs-keyword">function</span> <span class="hljs-title">likes</span>(<span class="hljs-params">names</span>) </span>{
  <span class="hljs-keyword">switch</span>(names.length){
    <span class="hljs-keyword">case</span> <span class="hljs-number">0</span>: <span class="hljs-keyword">return</span> <span class="hljs-string">&quot;no one likes this&quot;</span>;
    <span class="hljs-keyword">case</span> <span class="hljs-number">1</span>: <span class="hljs-keyword">return</span> <span class="hljs-string">`<span class="hljs-subst">${names[<span class="hljs-number">0</span>]}</span> likes this`</span>
    <span class="hljs-keyword">case</span> <span class="hljs-number">2</span>: <span class="hljs-keyword">return</span> <span class="hljs-string">`<span class="hljs-subst">${names[<span class="hljs-number">0</span>]}</span> and <span class="hljs-subst">${names[<span class="hljs-number">1</span>]}</span> like this`</span>
    <span class="hljs-keyword">case</span> <span class="hljs-number">3</span>: <span class="hljs-keyword">return</span> <span class="hljs-string">`<span class="hljs-subst">${names[<span class="hljs-number">0</span>]}</span>, <span class="hljs-subst">${names[<spanclass="hljs-number">1</span>]}</span> and <span class="hljs-subst">${names[<span class="hljs-number">2</span>]}</span> like this`</span>
    <span class="hljs-keyword">default</span>: <span class="hljs-keyword">return</span> <span class="hljs-string">`<span class="hljs-subst">${names[<span class="hljs-number">0</span>]}</span>, <span class="hljs-subst">${names[<span class="hljs-number">1</span>]}</span> and <span class="hljs-subst">${names.length - <span class="hljs-number">2</span>}</span> others like this`</span>
  }
}</code></pre></div><ul class="bulleted-text mbm"><li><time data-text-time="1543550157">2 weeks ago</time></li><li><span class="bullet"></span><a class="is-alt" href="/kata/who-likes-it/train/javascript/5c00b2c19e4971011600010d">Refactor</a></li></ul><div class="markdown"><pre><code class="mbx"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">likes</span>(<span class="hljs-params">names</span>) </span>{
  <span class="hljs-keyword">var</span> size = names.length, str = <span class="hljs-string">&quot;&quot;</span>;

  <span class="hljs-keyword">if</span>(size &lt; <span class="hljs-number">1</span>) {
    str = <span class="hljs-string">&quot;no one likes this&quot;</span>
  } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span>(size &lt; <span class="hljs-number">2</span>) {
    str = <span class="hljs-string">`<span class="hljs-subst">${names[<span class="hljs-number">0</span>]}</span> likes this`</span>
  } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span>(size &lt; <span class="hljs-number">3</span>) {
    str = <span class="hljs-string">`<span class="hljs-subst">${names[<span class="hljs-number">0</span>]}</span> and <span class="hljs-subst">${names[<span class="hljs-number">1</span>]}</span> like this`</span>
  } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span>(size &lt; <span class="hljs-number">4</span>) {
    str = <span class="hljs-string">`<span class="hljs-subst">${names[<span class="hljs-number">0</span>]}</span>, <span class="hljs-subst">${names[<span class="hljs-number">1</span>]}</span> and <span class="hljs-subst">${names[<span class="hljs-number">2</span>]}</span> like this`</span>
  } <span class="hljs-keyword">else</span> {
    <span class="hljs-keyword">let</span> others = size - <span class="hljs-number">2</span>;
    str = <span class="hljs-string">`<span class="hljs-subst">${names[<span class="hljs-number">0</span>]}</span>, <span class="hljs-subst">${names[<span class="hljs-number">1</span>]}</span> and <span class="hljs-subst">${others}</span> others like this`</span>
  }

  <span class="hljs-keyword">return</span> str;
}</code></pre></div><ul class="bulleted-text mbm"><li><time data-text-time="1543549118">2 weeks ago</time></li><li><span class="bullet"></span><a class="is-alt" href="/kata/who-likes-it/train/javascript/5c00a0820e7c890bba0000ab">Refactor</a></li><li><span class="bullet"></span><a class="is-alt" href="/kata/reviews/5266876c8f4bf2da9b000365/groups/5c00b0debf0ea712c500fd9d">Discuss</a></li></ul></div><div class="list-item solutions"><div class="item-title"><div border="false" class="small-hex is-extra-wide is-inline mrm is-white-rank"><div class="inner-small-hex is-extra-wide "><span>7 kyu</span></div></div><a href="/kata/5af15a37de4c7f223e00012d">Sort Out The Men From Boys </a></div><h6>JavaScript:</h6><div class="markdown"><pre><code class="mbx"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">menFromBoys</span>(<span class="hljs-params">arr</span>)</span>{
  <span class="hljs-keyword">var</span> result = [], prev = <span class="hljs-literal">undefined</span>;

  arr.sort(<span class="hljs-function">(<span class="hljs-params">a, b</span>) =&gt;</span> a - b).reverse().forEach(<span class="hljs-function">(<span class="hljs-params">num</span>) =&gt;</span> {
    <span class="hljs-keyword">if</span>(prev !== num){
      num % <span class="hljs-number">2</span> ? result.push(num) : result.unshift(num)
    }

    prev = num;
  })

  <span class="hljs-keyword">return</span> result;
}</code></pre></div><ul class="bulleted-text mbm"><li><time data-text-time="1543543495">2 weeks ago</time></li><li><span class="bullet"></span><a class="is-alt" href="/kata/sort-out-the-men-from-boys-1/train/javascript/5c0092510e7c890228000069">Refactor</a></li><li><span class="bullet"></span><a class="is-alt" href="/kata/reviews/5af704463abad6331d000bca/groups/5c009ad3bf0ea70be000ecfc">Discuss</a></li></ul></div><div class="list-item solutions"><div class="item-title"><div border="false" class="small-hex is-extra-wide is-inline mrm is-white-rank"><div class="inner-small-hex is-extra-wide "><span>7 kyu</span></div></div><a href="/kata/57cec34272f983e17800001e">PopShift</a></div><h6>JavaScript:</h6><div class="markdown"><pre><code class="mbx"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">popShift</span>(<span class="hljs-params">str</span>)</span>{
  <span class="hljs-keyword">var</span> strLen = str.length,
    splitStr = str.split(<span class="hljs-string">&apos;&apos;</span>),
    result = [<span class="hljs-string">&quot;&quot;</span>, <span class="hljs-string">&quot;&quot;</span>, <span class="hljs-string">&quot;&quot;</span>]

  <span class="hljs-keyword">while</span>(strLen &gt; <span class="hljs-number">1</span>) {
    result[<span class="hljs-number">0</span>] += splitStr.pop();
    result[<span class="hljs-number">1</span>] += splitStr.shift();

    strLen = splitStr.length;
  }

 result[<span class="hljs-number">2</span>] += splitStr[<span class="hljs-number">0</span>] ? splitStr[<span class="hljs-number">0</span>] : <span class="hljs-string">&apos;&apos;</span>

  <span class="hljs-keyword">return</span> result
}</code></pre></div><ul class="bulleted-text mbm"><li><time data-text-time="1543471167">2 weeks ago</time></li><li><span class="bullet"></span><a class="is-alt" href="/kata/popshift/train/javascript/5bff68a92afb736abc000111">Refactor</a></li><li><span class="bullet"></span><a class="is-alt" href="/kata/reviews/57cf4d9976163d9f79000044/groups/5bff8044d5ae9fea69000562">Discuss</a></li></ul></div><div class="list-item solutions"><div class="item-title"><div border="false" class="small-hex is-extra-wide is-inline mrm is-yellow-rank"><div class="inner-small-hex is-extra-wide "><span>5 kyu</span></div></div><a href="/kata/52e88b39ffb6ac53a400022e">int32 to IPv4</a></div><h6>JavaScript:</h6><div class="markdown"><pre><code class="mbx"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">int32ToIp</span>(<span class="hljs-params">int32</span>)</span>{
  <span class="hljs-comment">// converts int to binary string</span>
  <span class="hljs-keyword">var</span> binStr = int32 ? int32.toString(<span class="hljs-number">2</span>) : <span class="hljs-string">&apos;00000000000000000000000000000000&apos;</span>
  <span class="hljs-keyword">var</span> result = <span class="hljs-string">&apos;&apos;</span>;

  <span class="hljs-comment">// breaks binary string up into octets</span>
  <span class="hljs-keyword">for</span>(<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; binStr.length; i += <span class="hljs-number">8</span>) {
    <span class="hljs-comment">// slice octet</span>
    <span class="hljs-keyword">let</span> octet = binStr.slice(i, i + <span class="hljs-number">8</span>)

    <span class="hljs-comment">// convert to decimal</span>
    <span class="hljs-keyword">let</span> decimal = <span class="hljs-built_in">parseInt</span>(+octet, <span class="hljs-number">2</span>)

    <span class="hljs-comment">// concatnates decimal value onto result string</span>
    <span class="hljs-keyword">if</span>(i &lt; <span class="hljs-number">8</span>) result += <span class="hljs-string">`<span class="hljs-subst">${decimal}</span>`</span>
    <span class="hljs-keyword">else</span> result += <span class="hljs-string">`.<span class="hljs-subst">${decimal}</span>`</span>
  }

  <span class="hljs-keyword">return</span> result
}
</code></pre></div><ul class="bulleted-text mbm"><li><time data-text-time="1543464917">2 weeks ago</time></li><li><span class="bullet"></span><a class="is-alt" href="/kata/int32-to-ipv4/train/javascript/5bf1a928077f32d01c0001f1">Refactor</a></li><li><span class="bullet"></span><a class="is-alt" href="/kata/reviews/544696aed6aed37c1a0001d2/groups/5bff67db81c9a218270010d1">Discuss</a></li></ul></div><div class="list-item solutions"><div class="item-title"><div border="false" class="small-hex is-extra-wide is-inline mrm is-yellow-rank"><div class="inner-small-hex is-extra-wide "><span>6 kyu</span></div></div><a href="/kata/59d727d40e8c9dd2dd00009f">Easy Balance Checking</a></div><h6>JavaScript:</h6><div class="markdown"><pre><code class="mbx"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">balance</span>(<span class="hljs-params">book</span>) </span>{
  <span class="hljs-keyword">var</span> count = <span class="hljs-number">0</span>;
  <span class="hljs-keyword">var</span> lines = book.split(<span class="hljs-string">&apos;\n&apos;</span>)
  <span class="hljs-keyword">var</span> originalBalance = <span class="hljs-built_in">parseFloat</span>(lines.shift().replace(<spanclass="hljs-regexp">/[^.0-9]+/g</span>, <span class="hljs-string">&apos;&apos;</span>))
  <span class="hljs-keyword">var</span> balance = originalBalance.toFixed(<span class="hljs-number">2</span>);

  <span class="hljs-keyword">var</span> result = <span class="hljs-string">`Original Balance: <span class="hljs-subst">${balance}</span>\r\n`</span>

  lines.forEach(<span class="hljs-function"><span class="hljs-params">line</span> =&gt;</span> {
    <span class="hljs-keyword">let</span> words = line.split(<span class="hljs-string">&apos; &apos;</span>)
    <span class="hljs-keyword">if</span>(words[<span class="hljs-number">0</span>] !== <span class="hljs-string">&apos;&apos;</span>){
      <span class="hljs-keyword">let</span> checkNum = words[<span class="hljs-number">0</span>].replace(<span class="hljs-regexp">/\D+/g</span>, <span class="hljs-string">&apos;&apos;</span>)
      <span class="hljs-keyword">let</span> description = words[<span class="hljs-number">1</span>].replace(<span class="hljs-regexp">/[^a-zA-Z]+/g</span>, <span class="hljs-string">&apos;&apos;</span>)
      <span class="hljs-keyword">let</span> cost = <span class="hljs-built_in">parseFloat</span>(words[<span class="hljs-number">2</span>].replace(<span class="hljs-regexp">/[^.0-9]+/g</span>, <span class="hljs-string">&apos;&apos;</span>)).toFixed(<span class="hljs-number">2</span>)

      balance -= cost
      balance = balance.toFixed(<span class="hljs-number">2</span>)

      result += <span class="hljs-string">`<span class="hljs-subst">${checkNum}</span> <span class="hljs-subst">${description}</span> <span class="hljs-subst">${cost}</span> Balance <span class="hljs-subst">${balance}</span>\r\n`</span>

      count++
    }
  })

  <span class="hljs-keyword">var</span> expense = (originalBalance - balance).toFixed(<span class="hljs-number">2</span>);
  <span class="hljs-keyword">var</span> avgExpense = (expense / count).toFixed(<span class="hljs-number">2</span>);

  <span class="hljs-keyword">return</span> result += <span class="hljs-string">`Total expense  <span class="hljs-subst">${expense}</span>\r\nAverage expense  <span class="hljs-subst">${avgExpense}</span>`</span>
}
</code></pre></div><ul class="bulleted-text mbm"><li><time data-text-time="1543384581">2 weeks ago</time></li><li><span class="bullet"></span><a class="is-alt" href="/kata/easy-balance-checking/train/javascript/5bfe1465aef7120405000088">Refactor</a></li><li><spanclass="bullet"></span><a class="is-alt" href="/kata/reviews/5aaf66c3a04920cf6f000ad5/groups/5bfe2e09bf0ea7c273000035">Discuss</a></li></ul></div><div class="list-item solutions"><div class="item-title"><div border="false" class="small-hex is-extra-wide is-inline mrm is-white-rank"><div class="inner-small-hex is-extra-wide "><span>8 kyu</span></div></div><a href="/kata/576bb71bbbcf0951d5000044">Count of positives / sum of negatives</a></div><h6>JavaScript:</h6><div class="markdown"><pre><code class="mbx"><span class="hljs-function"><span class="hljs-keyword">function</span></span> countPositivesSumNegatives(input) {
  <span class="hljs-keyword">if</span>(<span class="hljs-comment">!input) return []; </span>

  var <span class="hljs-built_in">count</span> = <span class="hljs-number">0</span>, <span class="hljs-built_in">sum</span> = <spanclass="hljs-number">0</span>, result = [];

  input.forEach(num =&gt; {
    num &lt;= <span class="hljs-number">0</span> ? <span class="hljs-built_in">sum</span> += num : <span class="hljs-built_in">count</span>++
  })

  result.push(<span class="hljs-built_in">count</span>)
  result.push(<span class="hljs-built_in">sum</span>)

  <span class="hljs-keyword">if</span>(<span class="hljs-built_in">count</span> &gt; <span class="hljs-number">0</span> || <span class="hljs-built_in">sum</span> &gt; <span class="hljs-number">0</span>) <span class="hljs-keyword">return</span> result
  <span class="hljs-keyword">else</span> <span class="hljs-keyword">return</span> []
}</code></pre></div><ul class="bulleted-text mbm"><li><time data-text-time="1543377406">2 weeks ago</time></li><li><span class="bullet"></span><a class="is-alt" href="/kata/count-of-positives-slash-sum-of-negatives/train/javascript/5bfe0aa16cbbc6197900014e">Refactor</a></li><li><span class="bullet"></span><a class="is-alt" href="/kata/reviews/578e47f1f50c0dcc2c000111/groups/5bfe12081a16b03ccc0016a8">Discuss</a></li></ul></div><div class="list-item solutions"><div class="item-title"><div border="false" class="small-hex is-extra-wide is-inline mrm is-yellow-rank"><div class="inner-small-hex is-extra-wide "><span>6 kyu</span></div></div><a href="/kata/58f5c63f1e26ecda7e000029">Mexican Wave</a></div><h6>JavaScript:</h6><div class="markdown"><pre><code class="mbx"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">wave</span>(<span class="hljs-params">str</span>)</span>{
  <span class="hljs-keyword">var</span>  j = <span class="hljs-number">0</span>, result = [];

  str.toLowerCase().split(<span class="hljs-string">&apos;&apos;</span>).forEach(<span class="hljs-function">(<span class="hljs-params">letter, idx, arr</span>) =&gt;</span> {
    <span class="hljs-keyword">let</span> temp = arr.slice(<span class="hljs-number">0</span>);

    <span class="hljs-keyword">if</span>(idx === j) {
      j++;

      <span class="hljs-keyword">if</span>(!letter.match(<span class="hljs-regexp">/\w+/g</span>)) {
        <span class="hljs-keyword">return</span>;
      }

      temp.splice(idx, <span class="hljs-number">1</span>, letter.toUpperCase());
      result.push(temp.join(<span class="hljs-string">&apos;&apos;</span>))
    }
  })

  <span class="hljs-keyword">return</span> result
}
</code></pre></div><ul class="bulleted-text mbm"><li><time data-text-time="1543208468">2 weeks ago</time></li><li><span class="bullet"></span><a class="is-alt" href="/kata/mexican-wave/train/javascript/5bfb6fef392c5bc745000150">Refactor</a></li><li><span class="bullet"></span><a class="is-alt" href="/kata/reviews/58f5d29b2bf7a998b4000076/groups/5bfb7e1829354dbbe100177d">Discuss</a></li></ul></div><div class="list-item solutions"><div class="item-title"><div border="false" class="small-hex is-extra-wide is-inline mrm is-white-rank"><div class="inner-small-hex is-extra-wide "><span>7 kyu</span></div></div><a href="/kata/54ff3102c1bad923760001f3">Vowel Count</a></div><h6>JavaScript:</h6><div class="markdown"><pre><code class="mbx"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getCount</span>(<span class="hljs-params">str</span>) </span>{
  <span class="hljs-keyword">var</span> vowelsCount = <span class="hljs-number">0</span>;

  str.toLowerCase().split(<span class="hljs-string">&apos;&apos;</span>).forEach(<span class="hljs-function"><span class="hljs-params">letter</span> =&gt;</span> {
    <span class="hljs-keyword">if</span>(letter === <span class="hljs-string">&apos;a&apos;</span> || letter === <span class="hljs-string">&apos;e&apos;</span> || letter === <span class="hljs-string">&apos;i&apos;</span> || letter === <span class="hljs-string">&apos;o&apos;</span> || letter === <span class="hljs-string">&apos;u&apos;</span>) vowelsCount++
  })

  <span class="hljs-keyword">return</span> vowelsCount;
}</code></pre></div><ul class="bulleted-text mbm"><li><time data-text-time="1543204477">2 weeks ago</time></li><li><span class="bullet"></span><a class="is-alt" href="/kata/vowel-count/train/javascript/5bfb6b883efceeeaed00011e">Refactor</a></li><li><span class="bullet"></span><a class="is-alt" href="/kata/reviews/54ff35d3c1bad9fbfb00021d/groups/5bfb6e8c29354d58380016e4">Discuss</a></li></ul></div><div class="list-item solutions"><div class="item-title"><div border="false" class="small-hex is-extra-wide is-inline mrm is-white-rank"><div class="inner-small-hex is-extra-wide "><span>7 kyu</span></div></div><a href="/kata/56747fd5cb988479af000028">Get theMiddle Character</a></div><h6>JavaScript:</h6><div class="markdown"><pre><code class="mbx"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getMiddle</span>(<span class="hljs-params">str</span>) </span>{
  <span class="hljs-keyword">const</span> strLength = str.length;
  <span class="hljs-keyword">return</span> str.slice(<span class="hljs-built_in">Math</span>.ceil(strLength/<span class="hljs-number">2</span> - <span class="hljs-number">1</span>), strLength%<span class="hljs-number">2</span> ? <span class="hljs-built_in">Math</span>.ceil(strLength/<span class="hljs-number">2</span>) : strLength/<span class="hljs-number">2</span> + <span class="hljs-number">1</span>)
}</code></pre></div><ul class="bulleted-text mbm"><li><time data-text-time="1543203538">2 weeks ago</time></li><li><span class="bullet"></span><a class="is-alt" href="/kata/get-the-middle-character/train/javascript/5bfb694d077f32bd0300007a">Refactor</a></li><li><span class="bullet"></span><a class="is-alt" href="/kata/reviews/567486aaed8cf6cf5600000c/groups/5bfb6ae1ff39864a790013f0">Discuss</a></li></ul><div class="markdown"><pre><code class="mbx">function getMiddle(<span class="hljs-built_in">str</span>) {
  <span class="hljs-keyword">const</span> strLength = <span class="hljs-built_in">str</span>.length;
  <span class="hljs-keyword">return</span> strLength%<span class="hljs-number">2</span> ? <span class="hljs-built_in">str</span>.slice(strLength/<span class="hljs-number">2</span>, strLength/<span class="hljs-number">2</span> + <span class="hljs-number">1</span>): <span class="hljs-built_in">str</span>.slice(strLength/<span class="hljs-number">2</span> - <span class="hljs-number">1</span>, strLength/<span class="hljs-number">2</span> + <span class="hljs-number">1</span>)
}</code></pre></div><ul class="bulleted-text mbm"><li><time data-text-time="1543203089">2 weeks ago</time></li><li><span class="bullet"></span><a class="is-alt" href="/kata/get-the-middle-character/train/javascript/5bfb686baef712bbf1000076">Refactor</a></li><li><span class="bullet"></span><a class="is-alt" href="/kata/reviews/567486aaed8cf6cf5600000c/groups/5bfb6921ff39867ecc0013dd">Discuss</a></li></ul><div class="markdown"><pre><code class="mbx">function getMiddle(<span class="hljs-built_in">str</span>) {
  <span class="hljs-keyword">const</span> strLength = <span class="hljs-built_in">str</span>.length;
  <span class="hljs-keyword">return</span> strLength%<span class="hljs-number">2</span> === <span class="hljs-number">0</span> ? <span class="hljs-built_in">str</span>.slice(strLength/<span class="hljs-number">2</span> - <span class="hljs-number">1</span>, strLength/<span class="hljs-number">2</span> + <span class="hljs-number">1</span>) : <span class="hljs-built_in">str</span>.slice(strLength/<span class="hljs-number">2</span>, strLength/<span class="hljs-number">2</span> + <span class="hljs-number">1</span>)
}</code></pre></div><ul class="bulleted-text mbm"><li><time data-text-time="1543202671">2 weeks ago</time></li><li><span class="bullet"></span><a class="is-alt" href="/kata/get-the-middle-character/train/javascript/5bfb6518e50d1bb814000073">Refactor</a></li><li><span class="bullet"></span><a class="is-alt" href="/kata/reviews/567486aaed8cf6cf5600000c/groups/5bfb677fff398617ca0013cb">Discuss</a></li></ul></div><div class="pas js-infinite-marker" data-page="1"><h5>Loading more items...</h5></div> */
}
