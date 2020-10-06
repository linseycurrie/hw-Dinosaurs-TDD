const Park = function(name, ticketPrice){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
}

Park.prototype.add = function(dinosaur){    
    this.dinosaurs.push(dinosaur);
}

Park.prototype.remove = function(dinosaur){
    const index = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(index, 1);
}

Park.prototype.findMostAttractiveDinosaur = function(){
    let mostAttractiveDino = this.dinosaurs[0];
    for ( dino of this.dinosaurs ){
        if( dino.guestsAttractedPerDay > mostAttractiveDino.guestsAttractedPerDay){
            mostAttractiveDino = dino;
        }
    }
    return mostAttractiveDino;
}

Park.prototype.findBySpecies = function(species){
    let speciesCollection = [];
    for ( dino of this.dinosaurs ){
        if ( dino.species === species){
            speciesCollection.push(dino);
        }
    }
    return speciesCollection;
}

Park.prototype.calculateAverageVisitorsPerDay = function(){
    let totalNumberOfVisitors = 0;
    for ( dino of this.dinosaurs ){
        totalNumberOfVisitors += dino.guestsAttractedPerDay;
    }
    return totalNumberOfVisitors;
}

Park.prototype.calculateAverageVisitorsPerYear = function(){
    let visitorsPerYear = 0;
    visitorsPerYear = this.calculateAverageVisitorsPerDay() * 365;
    return visitorsPerYear;
}

Park.prototype.calculateAverageYearlyRevenue = function(){
    let yearlyRevenue = 0;
    yearlyRevenue = this.calculateAverageVisitorsPerYear() * this.ticketPrice;
    return yearlyRevenue
}

//////////////
//EXTENSIONS//
/////////////

Park.prototype.removeBySpecies = function(species){
    let collectionOfSpecies;
    collectionOfSpecies = this.findBySpecies(species);
    for ( dino of collectionOfSpecies ){
        this.remove(dino);
    }
}

// Park.prototype.numberOfDinosaursByDiet = function(){
//     let dinosaurByDiet = {}

    

//     for ( dino of this.dinosaurs ){
//         if ( dino.diet == dinosaurByDiet.keys){
//             let value = dinosaurByDiet[dino.diet];
//             dinosaurByDiet[dino.diet] = (value + 1);
//         } else {
//             dinosaurByDiet[dino.diet] = 1;
//         }
//     }
//     return dinosaurByDiet;
// }


module.exports = Park;