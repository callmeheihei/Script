/*

Quantumult X 脚本:

[rewrite_local]
# Notability （by 黑黑）
^https:\/\/moon\.mxnode\.cn\/light\/dispatch\/v1\?cmd\=status\&.+ url script-response-body Notability.js

[mitm]
hostname = notability.com


*/

let obj = JSON.parse($response.body);
obj = {
  "data" : {
    "processAppleReceipt" : {
      "error" : 0,
      "subscription" : {
        "productId" : "com.gingerlabs.Notability.premium_subscription",
        "originalTransactionId" : "550001329152463",
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
