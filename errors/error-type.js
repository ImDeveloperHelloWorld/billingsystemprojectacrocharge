let ErrorType = {
    
    //General Error Type
    GENERAL_ERROR : {id: 1, httpCode: 600, message : "A big fuck up which we'll never tell you of had just happend. And now : A big fat lie....'A general error ....'", isShowStackTrace: true},
    UNAUTHORIZED : {id: 2, httpCode: 401, message : "Login failed, invalid user name or password", isShowStackTrace: true},

    //User Error Type
    INVALID_EMAIL_ADDRESS: {id:3, httpCode: 601, message: "The Email Address Is Invalid", isShowStackTrace: true},
    USER_NAME_ALREADY_EXIST : {id: 4, httpCode: 602, message : "User name already exist", isShowStackTrace: false},
    IVALID_PASSWORD: {id:5, httpCode: 603, message: "Invalid Password The Length Should Be More Than 6 Digits And Less Than 12 Digits", isShowStackTrace: true},
    IVALID_USERNAME: {id:6, httpCode: 604, message: "Invalid Username The Length Should Be More Than 4 Digits And Less Than 12 Digits", isShowStackTrace: true},
    EMPTY_FIELD_USERNAME: {id: 7, httpCode: 605, message: "The UserName Field Is Empty", isShowStackTrace: true},
    EMPTY_FIELD_PASSWORD: {id: 8, httpCode: 606, message: "The Password Field Is Empty", isShowStackTrace: true},
    EMPTY_FIELD_FIRSTNAME: {id: 9, httpCode: 607, message: "The First Name Field Is Empty", isShowStackTrace: true},
    EMPTY_FIELD_LASTNAME: {id: 10, httpCode: 608, message: "The Last Name Field Is Empty", isShowStackTrace: true},
    EMPTY_FIELD_EMAIL: {id: 11, httpCode: 609, message: "The Email Field Is Empty", isShowStackTrace: true},
    USER_EXIST: {id: 12, httpCode: 610, message: "The User Name Is Already Exist", isShowStackTrace: true},
    EMAIL_EXIST: {id: 13, httpCode: 611, message: "The Email Is Already Exist", isShowStackTrace: true},
    PARAMETERS_ERROR: {id: 14, httpCode: 612, message: "One Or More Of The Parameters You Entered Are Wrong", isShowStackTrace: true},
    ALREADY_FOLLOW_VACATION: {id: 15, httpCode: 613, message: "You're Already Follow On This Vacation", isShowStackTrace: true},

    //Vacation Error Type
    EMPTY_FIELD_DESCRIPTION: {id: 16, httpCode: 614, message: "The Description Field Is Empty", isShowStackTrace: true},
    EMPTY_FIELD_DESTINATION: {id: 17, httpCode: 615, message: "The Destination Field Is Empty", isShowStackTrace: true},
    EMPTY_FIELD_IMAGE_URL: {id: 18, httpCode: 616, message: "The Image URL Field Is Empty", isShowStackTrace: true},
    EMPTY_FIELD_START_DATE: {id: 19, httpCode: 617, message: "The Start Date Field Is Empty", isShowStackTrace: true},
    EMPTY_FIELD_END_DATE: {id: 20, httpCode: 618, message: "The End Date Field Is Empty", isShowStackTrace: true},
    EMPTY_FIELD_PRICE: {id: 21, httpCode: 619, message: "The Price Field Is Empty", isShowStackTrace: true},
    INVALID_IMAGE_URL: {id: 22, httpCode: 620, message: "The Image URL Is Invalid The File Must Be JPG", isShowStackTrace: true},
    ALREADY_FOLLOW: {id: 23, httpCode: 621, message: "You Already Follow After This Vacation", isShowStackTrace: true},
    ALREADY_UNFOLLOW: {id: 24, httpCode: 622, message: "You Already UnFollow After This Vacation", isShowStackTrace: true},
    DESCRIPTION_ALREADY_EXIST: {id: 25, httpCode: 623, message: "You Already Have This Description", isShowStackTrace: true},
    VACATION_DELETED: {id: 26, httpCode: 624, message: "The Vacation Were Already Deleted", isShowStackTrace: true},
    INVALID_DATE: {id: 27, httpCode: 625, message: "The Start Date Can't Be Bigger Than End Date", isShowStackTrace: true},
    INVALID_TIME: {id: 28, httpCode: 626, message: "The Start Or End Date Can't Be Smaller Than Current Date", isShowStackTrace: true},

    // Customer Error Type
    RELATEDTRANSACTION: {id: 29, httpCode: 627, message: "You Can't Remove Customer With Related Transaction", isShowStackTrace: true}

}

module.exports = ErrorType;