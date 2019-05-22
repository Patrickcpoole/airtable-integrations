const apiKey = 'keyBupI08coJkltKa';

const fetchRecords = () => {
    fetch('https://api.airtable.com/v0/app9VtXS1vJyLgLgK/OB%20Integration%20Requests?sort%5B0%5D%5Bfield%5D=Completion%20Date&sort%5B0%5D%5Bdirection%5D=asc', {
headers: {
    Authorization: `Bearer ${apiKey}`
  }
}).eachPage(function page(records, fetchNextPage) {
    records.forEach(function(record) {
        console.log('Retrieved ', record.get('Name'));
       
    });
    fetchNextPage();
}, function done(error) {
    console.log(error);
});
};

const button = document.querySelector('button');
button.addEventListener('click', fetchRecords);