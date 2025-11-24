// DESCRIPTION
// Create a function match which takes a job, and filters a list of candidates to the ones that match the job. We'll
// focus on two matching properties for this Kata: equity and location.
//
// Equity
// The candidate has an equity property (boolean) indicating if they desire equity, while the job will have a maximum
// equity property (float) representing the max amount of equity offered. If the maximum equity is zero, we can infer
// there is no equity offered. A job will match unless the candidate desires equity, but the job does not offer any.
//
// Location
// The candidate will have two location properties: current location and desired locations. A job can be located in
// multiple places as well which will be represented by its locations property. A match is when a job location is either
// in the candidate's current location or any of the candidate's desired locations.
//
// So the candidate list might look like this:
//
// let candidates = [{
//   desiresEquity: true,
//   currentLocation: 'New York',
//   desiredLocations: ['San Francisco', 'Los Angeles', 'Colorado']
// }, ...];
// And a job might look like this:
//
// let job = {
//   equityMax: 1.2,
//   locations: ['New York', 'Kentucky']
// }


// TESTS
//    let candidates = [{
//   desiresEquity: true,
//   currentLocation: 'New York',
//   desiredLocations: ['San Francisco', 'Los Angeles']
// }, {
//   desiresEquity: false,
//   currentLocation: 'San Francisco',
//   desiredLocations: ['Kentucky', 'New Mexico']
// }];
// let job1 = { equityMax: 0, locations: ['Los Angeles', 'New York'] },
//     job2 = { equityMax: 1.2, locations: ['New York', 'Kentucky'] };
// Test.assertEquals(match(job1, candidates).length, 0);
// Test.assertEquals(match(job2, candidates).length, 2);


// SOLUTION
function match(job, candidates) {
    let result = []
    candidates.filter(candidate => {
        if (job.equityMax === 0 && candidate.desiresEquity === true) return false
        if (job.locations.includes(candidate.currentLocation) ||
            job.locations.some(location => candidate.desiredLocations.includes(location))
        ) result.push(candidate)
    })
    return result
}

let candidates = [{
    desiresEquity: true,
    currentLocation: 'New York',
    desiredLocations: ['San Francisco', 'Los Angeles']
}, {
    desiresEquity: false,
    currentLocation: 'San Francisco',
    desiredLocations: ['Kentucky', 'New Mexico']
}]

let job1 = {equityMax: 0, locations: ['Los Angeles', 'New York']};
let job2 = {equityMax: 1.2, locations: ['New York', 'Kentucky']};

console.log(match(job1, candidates))
console.log(match(job2, candidates))