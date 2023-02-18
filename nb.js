var obj = JSON.parse($response.body);
obj = {
  "data" : {
    "processAppleReceipt" : {
      "error" : 0,
      "subscription" : {
        "productId" : "com.gingerlabs.Notability.premium_subscription",
        "originalTransactionId" : "100109876543210",
        "tier" : "premium",
        "refundedDate" : null,
        "refundedReason" : null,
        "isInBillingRetryPeriod" : false,
        "expirationDate" : "2999-09-28T09:09:09.000Z",
        "gracePeriodExpiresAt" : null,
        "overDeviceLimit" : false,
        "expirationIntent" : null,
        "__typename" : "AppStoreSubscription",
        "user" : null,
        "status" : "active",
        "originalPurchaseDate" : "2023-02-18T08:40:17.000Z"
      },
      "__typename" : "SubscriptionResult"
    }
  }
}
$done({body: JSON.stringify(obj)});
//
