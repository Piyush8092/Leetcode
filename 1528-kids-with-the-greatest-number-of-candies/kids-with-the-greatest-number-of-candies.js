function kidsWithCandies(candies, extraCandies) {
    let ans = [];
    let maxi = Math.max(...candies);

    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= maxi) {
            ans.push(true);
        } else {
            ans.push(false);
        }
    }

    return ans;
}
