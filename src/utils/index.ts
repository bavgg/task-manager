export function getInitials(fullName: string) {
  const names = fullName.split(" ");

  const initials = names.slice(0, 2).map((name) => name[0].toUpperCase());

  const initialsStr = initials.join("");

  return initialsStr;
}

export const TASK_TYPE: {todo: string, in_progress: string, completed: string} = {
  todo: "bg-blue-600",
  "in_progress": "bg-yellow-600",
  completed: "bg-green-600",
} ;

export function getStageColor(stage: string) {
  if(stage === 'todo'){
    return '#283618';
  }else if(stage === 'in_progress') {
    return '#DDA15E';
  }else if(stage === 'completed'){
    return '#606C38';
  }
}

export function getInitialColor(index: number) {
  if(index === 0){
    return '#283618';
  }else if(index === 1) {
    return '#DDA15E';
  }else if(index === 2){
    return '#606C38';
  }
}