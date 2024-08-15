var findLadders = function(beginWord, endWord, wordList) {
    var wordSet = new Set(wordList); //the set of available words
    var result = [];
    if(!wordSet.has(endWord)) return result;
    wordSet.delete(beginWord); //avoid reusing the beginWord
    wordSet.delete(endWord); //endWord will be used to compare, avoid reusing ut
    
    var steps = {[beginWord]: 1}; //key: word, value: the min steps to reach word
    var parents = {}; //key: word, value: the parents of the word
    var queue = [beginWord];
    var step = 0;
    var found = false;
    while(queue.length && !found) {
        ++step;
        for(var curL = queue.length; curL > 0; curL--) {
            var word = queue.shift();
            for(var idx = 0; idx < beginWord.length; idx++) {
                for(let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
                    if(String.fromCharCode(i) === word[idx]) continue; //skip the same char
                    var newWord = replaceAt(word, idx, String.fromCharCode(i));
                    if(newWord === endWord) {
                        parents[endWord] = parents[endWord] ? [...parents[endWord], word] : [word];
                        found = true;
                    } else {
                        //handle the different paths that reaches at newWord
                        if(steps.hasOwnProperty(newWord) && step < steps[newWord]) {
                            //the newWord was visited before from the same level
                            parents[newWord].push(word);
                        }
                    }
                    if(!wordSet.has(newWord)) continue;
                    queue.push(newWord);
                    wordSet.delete(newWord);
                    steps[newWord] = steps[word] + 1;
                    if(parents[newWord]) {
                        parents[newWord].push(word);
                    } else {
                        parents[newWord] = [word];
                    }
                    
                }
            }
        }
    }
    if(found) {
        getPaths(endWord, beginWord, parents, result, [endWord]);
    }
    return result;
};

//helper to replace a char at index
function replaceAt(str, idx, char) {
    return str.slice(0, idx) + char + str.slice(idx + 1);
}

//do dfs on parents, to find all the paths
function getPaths(word, beginWord, parents, result, curPath) {
    if(word === beginWord) {
        result.push([...curPath].reverse());
        return;
    }
    var words = parents[word];
    for(var w of words) {
        curPath.push(w);
        getPaths(w, beginWord, parents, result, curPath);
        curPath.pop();
    }
}