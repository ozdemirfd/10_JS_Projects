const team={
  _position:{
    centers:[],
    forwards:[],
    defence:[]
  },
 get centers(){
    return this._position.centers;
  },
  get forwards(){
    return this._position.forwards;
  },
  get defence(){
    return this._position.defence;
  },
  get position(){
    return{
      centers:this.centers,
      forwards:this.forwards,
      defence:this.defence
    }
  },

  set centers(val){
 this._position.centers=val
  },
  set forwards(val){
    this._position.forwards=val
  },
  set defence(val){
    return this._position.defence=val
  },

  addPlayerToPosition(positionName,playerName,playerPoint){
    const player={
      name:playerName,
      point:playerPoint
    }
    this.position[positionName].push(player)
  },
  getRandomPlayerFromPosition(positionName){
    const i=Math.floor(Math.random()*this.position[positionName].length)
    return this.position[positionName][i]
   
  },
  getRandomTeam(){
    let center=this.getRandomPlayerFromPosition("centers");
    console.log(center)
    let forward=this.getRandomPlayerFromPosition("forwards");
    let defence=this.getRandomPlayerFromPosition("defence")

    let total= center.point+forward.point+defence.point
    let avr=total/3
    return `We selected ${center.name} for center position, ${forward.name} for forward position, and ${defence.name} for guard position. Average point of the team is ${avr.toFixed(2)}.`;
  }

}

team.addPlayerToPosition('centers', 'Bam Adebayo', 6.25);
team.addPlayerToPosition('centers', 'Luol Deng', 6.70);
team.addPlayerToPosition('centers', 'Carmelo Anthony', 6.82);
team.addPlayerToPosition('centers', 'Al Horford', 6.45);
team.addPlayerToPosition('centers', 'Andrew Bogut', 6.32);
team.addPlayerToPosition('forwards', 'Dwynae Wade', 6.35);
team.addPlayerToPosition('forwards', 'Derrick Rose', 7.10);
team.addPlayerToPosition('forwards', 'Kobe Bryant', 6.60);
team.addPlayerToPosition('forwards', 'Russell Westbrook', 6.30);
team.addPlayerToPosition('forwards', 'Marc Gasol', 6.98);
team.addPlayerToPosition('defence', 'Kevin Love', 6.85);
team.addPlayerToPosition('defence', 'Kevin Durant', 6.90);
team.addPlayerToPosition('defence', 'Dirk Nowitzki', 7.00);
team.addPlayerToPosition('defence', 'LeBron James', 6.80);
team.addPlayerToPosition('defence', 'Andrew Bynum', 7.11);
let selectedTeam = team.getRandomTeam();
console.log(selectedTeam);