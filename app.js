const jobForm = document.querySelector('.job-form')
const apiURL = 'https://dino-1-server.herokuapp.com/'


function postJob(){
    let job = {'title': jobForm.title.value, 'pay': jobForm.pay.value,'description': jobForm.description.value,'interested': '0 dinos interested in this job'}
    createListing(job)
}

function createListing(job) {
    let jobListings = document.querySelector('#job-listings'),
        newJob = document.createElement('li'),
        jobTitle = document.createElement('h4'),
        jobPay = document.createElement('small'),
        jobDescription = document.createElement('p'),
        jobInterest = document.createElement('small');

    jobTitle.innerText = job.title
    newJob.append(jobTitle)
    jobPay.innerText = job.pay
    newJob.append(jobPay)
    jobDescription.innerText = job.description
    newJob.append(jobDescription)
    jobInterest.innerText = job.interested
    newJob.append(jobInterest)
    jobListings.append(newJob)
}

document.addEventListener('DOMContentLoaded', function () {
    jobForm.submit.addEventListener('click', function(e){
        e.preventDefault();
        postJob()
    })
    fetch(apiURL)
        .then(result => result.json())
        .then(result => {
            result.forEach(element => createListing(element))
        })
})