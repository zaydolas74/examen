<?php

use craft\elements\Entry;

return [
    'endpoints' => [
        'api/flight' => function() {
            return [
                'elementType' => Entry::class,
                'criteria' => ['section' => 'flight'],
                'transformer' => function(Entry $entry) {
                    return [
                        'id' => $entry->id,
                        'title' => $entry->title,
                        'price' => $entry->price,
                        'countryimage' => $entry->countryimage->one()->url,
                        'image' => $entry->image,
                        'description' => $entry->description,
                        'countryName' => $entry->countryName,
                        'cityName' => $entry->cityName,
                        'travelTime' => $entry->travelTime,
                        'flightName' => $entry->flightName,
                        'company' => $entry->company,
                    ];
                },
            ];
        },

        'api/accommodations' => function() {
            return [
                'elementType' => Entry::class,
                'criteria' => ['section' => 'accommodations'],
                'transformer' => function(Entry $entry) {
                    return [
                        'id' => $entry->id,
                        'title' => $entry->title,
                        'price' => $entry->price,
                        'hotelimage' => $entry->hotelimage->one()->url,
                        'description' => $entry->description,
                        'countryName' => $entry->countryName,
                        'cityName' => $entry->cityName,
                        'hotelName' => $entry->hotelName,
                        'address' => $entry->address,
                        'contactDetails' => $entry->contactDetails,

                    ];
                },
            ];
        },
    ],
];