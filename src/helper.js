
export const convertSToHM = (seconds) => {
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
  
    seconds = seconds % 60;
    minutes = seconds >= 30 ? minutes + 1 : minutes;
  
    minutes = minutes % 60;
    let result = '';
    if(hours) {
      result += hours + 'h '
    } if (minutes) {
      result += minutes + 'm'
    }
  
    return result;
  }