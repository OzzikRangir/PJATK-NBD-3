db.people.find(
    {
        birth_date:
        {
            $gte: "2000-00-00"
        }
    },
    {
        first_name: 1,
        last_name: 1,
        _id: 0,
        "location.city": 1
    }
).forEach(printjson)