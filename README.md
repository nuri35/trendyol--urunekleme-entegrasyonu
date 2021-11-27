# Trendyol ürün ekleme entegrasyonu

![alt text](https://cdn.webrazzi.com/uploads/2021/07/60c0b5e5-9a5d-4966-b230-1c41f148f870-872.png)

Trendyolun ürün ekleme, ürün güncelleme, ürün listeleme gibi ürün entegrasyonu bulunmaktadır. Örnek olması amacıyla edindiğim bilgiler dahilinde sizlere ürün ekleme entegrasyonu api kullanımını göstereceğım. Fakat ürün eklemek için örnek sahte veri kullandım. Sizler ürün eklemek için cargoId,companyId gibi gerçek degerleri api olarak çekip daha sonra ürün ekleme api'sini kullanınız. Detaylı bilgi burada yer almaktadır. https://developers.trendyol.com/tr/api

 ## :computer:Postman ekledıgım veri 
 
 Ürün aktarım işlemi sonrasında response içerisinde yer alan batchRequestId ile ürünlerinizin ve aktarım işleminin durumunu getBatchRequestResult servisi üzerinden kontrol etmelisiniz. 

```
{
  "items": [
    {
      "barcode": "barkod-1234",
      "title": "Bebek Takımı Pamuk",
      "productMainId": "1234BT",
      "brandId": 1791,
      "categoryId": 411,
      "quantity": 100,
      "stockCode": "STK-345",
      "dimensionalWeight": 2,
      "description": "Ürün açıklama bilgisi",
      "currencyType": "TRY",
      "listPrice": 250.99,
      "salePrice": 120.99,
      "vatRate": 18,
      "cargoCompanyId": 10,
      "shipmentAddressId": 0,
      "returningAddressId": 0,
      "images": [
        {
          "url": "https://www.sampleadress/path/folder/image_1.jpg"
        }
      ],
      "attributes": [
        {
          "attributeId": 338,
          "attributeValueId": 6980
        },
        {
          "attributeId": 343,
          "attributeValueId": 4294
        },
        {
          "attributeId": 346,
          "attributeValueId": 4290
        }
      ]
    },
    {
      "barcode": "barkod-12345",
      "title": "Bebek Takımı Pamuk",
      "productMainId": "1234BT",
      "brandId": 1791,
      "categoryId": 411,
      "quantity": 100,
      "stockCode": "STK-3454",
      "dimensionalWeight": 2,
      "description": "Ürün açıklama bilgisi",
      "currencyType": "TRY",
      "listPrice": 250.99,
      "salePrice": 120.99,
      "vatRate": 18,
      "cargoCompanyId": 10,
      "shipmentAddressId": 0,
      "returningAddressId": 0,
      "images": [
        {
          "url": "https://www.sampleadress/path/folder/image_2.jpg"
        }
      ],
      "attributes": [
        {
          "attributeId": 338,
          "attributeValueId": 6981
        },
        {
          "attributeId": 343,
          "attributeValueId": 4294
        },
        {
          "attributeId": 346,
          "attributeValueId": 4290
        }
      ]
    }
  ]
}
```
https://api.trendyol.com/sapigw/suppliers/{supplierid}/products/batch-requests/{batchRequestId} 
```
 ## :computer:batchRequestId sonucu 
 
 {
    "batchRequestId": "5631d1a1-ec81-496f-9407-99876554433-1529820717",
    "items": [
        {
            "requestItem": {
                "product": {
                    "brand": "Apple",
                    "barcode": "99999999999",
                    "title": "Apple iPhone X 64 GB Cep Telefonu",
                    "description": "Apple iPhone X 64 GB Cep Telefonu",
                    "categoryName": "LG Cep Telefonlar",
                    "listPrice": 5899.00,
                    "salePrice": 5649.00,
                    "currencyType": "TRY",
                    "vatRate": 18,
                    "cargoCompany": "YK",
                    "quantity": 4,
                    "stockCode": "IphoneX",
                    "images": [
                        {
                            "url": "https://img-trendyol.mncdn.com/mnresize/1200/1800//Assets/ProductImages/oa/54/1886736/2/0190198457226_1_org_zoom.jpg"
                        },
                        {
                            "url": "https://img-trendyol.mncdn.com/mnresize/1200/1800//Assets/ProductImages/oa/54/1886736/2/0190198457226_1_org_zoom.jpg"
                        },
                        {
                            "url": "https://img-trendyol.mncdn.com/mnresize/1200/1800//Assets/ProductImages/oa/54/1886736/2/0190198457226_1_org_zoom.jpg"
                        }
                    ],
                    "productMainId": "IphoneX",
                    "gender": "M",
                    "dimensionalWeight": 0,
                    "attributes": [],
                    "variantAttributes": [
                        {
                            "attributeName": "Renk",
                            "attributeValue": "Siyah"
                        }
                    ]
                }
            },
            "status": "SUCCESS",
            "failureReasons": []
        }
    ],
    "status": "COMPLETED",
    "creationDate": 1529734317090,
    "lastModification": 1529734653403,
    "sourceType": "API",
    "itemCount": 1
}
```

