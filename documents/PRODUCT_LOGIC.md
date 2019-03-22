# Product logic

## Default user

All the shopping cart is belog to one user (user id = 1).

## Strategy for maintaining the data of remain_count

There are two main ways, one is to reduce the number of items once the users add them to the shopping cart, 
and should set the expired time to return back to the product list if the users do not check out.

Second is that adding to shopping cart will not reduce the number of the items' stock. 
The remain count will only be changed when users check out.

Because the first strategy will cause the wastage of resources, I adopt the second one. The backend's validation for item's 
number is in the range of 1 to 99, and compare the remain_count passed from frontend(no need to query the mysql again).
Since when checking out, the remain_count will be validated again, the validation in shopping-list-backend is
just used for showing the tips for the normal users.

Besides, every time the user enter the shopping-cart page, the remain count will be updated.
If the customers' adding quantity exceed the stock, the quantity will automatically be chaged to the value of the stock.

## Home page

Show every category's newest 20 products.

Clicking the add green cart button, 

when success, the badge of "success add to the cart" will show

when out of the limit, the badge of "exceed the stock number" will show

Also the quantity number in the notification button will respondingly change.

![home-pc-page](https://github.com/yanzewei/shopping-list-images/blob/master/home_pc.jpeg)

## Cart page
When changing the quantity, the data of quantity and subtotal will change simultaneously 
and the save-icon nearby will turn yellow to remind the user to save

When clicking the delete-icon, the data of quantity and subtotal should be changed respondingly.

![cart-pc-page](https://github.com/yanzewei/shopping-list-images/blob/master/cart_pc.jpeg)

Limit the the maximum of input quantity is 99. When the number exceed the stock number, should show the alert modal,
and change the quantity as the value of stock number.

![cart-pc-alert-page](https://github.com/yanzewei/shopping-list-images/blob/master/cart_alert.jpg)

## Search

Search the products accoriding the title. Apply the prefix index to the column title.
![product-search](https://github.com/yanzewei/shopping-list-images/blob/master/search.jpg)

When there's no result, should give the tip.
![product-no-result](https://github.com/yanzewei/shopping-list-images/blob/master/search-no-result.jpg)

## Resposive html for mobile

![home-mobile](https://github.com/yanzewei/shopping-list-images/blob/master/home_mobile.jpeg)

![cart-mobile](https://github.com/yanzewei/shopping-list-images/blob/master/cart_mobile.jpeg)

