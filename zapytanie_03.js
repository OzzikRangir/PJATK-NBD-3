db.people.find(
    {
        nationality: "Germany",
        sex: "Male"
    }
).forEach(printjson)