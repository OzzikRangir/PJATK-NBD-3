printjson(
    db.people.insert(
        {
            "sex": "Male",
            "first_name": "Oskar",
            "last_name": "Kacprzak",
            "job": "Linux embedded developer",
            "email": "s22010@pjwstk.edu.pl",
            "location": {
                "city": "Warsaw",
                "address": {
                    "streetname": "Yes",
                    "streetnumber": "2137"
                }
            },
            "description": "Lorem ipsum",
            "height": "182",
            "weight": "78",
            "birth_date": "1996-06-18T13:13:13Z",
            "nationality": "Poland",
            "credit": [
                {
                    "type": "mastercard",
                    "number": "66666666666666666",
                    "currency": "PLN",
                    "balance": "2137"
                }
            ]
        }
    )
)