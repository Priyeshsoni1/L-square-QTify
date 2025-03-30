export const millisecondsToMinutesAndSeconds=(milliseconds)=>{
    let seconds=Math.floor(milliseconds/1000)
    let minutes=Math.floor(seconds/60)
    let remainingSeconds=seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? '0'+remainingSeconds : remainingSeconds}`;
}