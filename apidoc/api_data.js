define({ "api": [
  {
    "type": "delete",
    "url": "/admin/categories",
    "title": "Delete Category",
    "name": "DeleteCategory",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Category ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"status\" : 0,\n\t\"message\" : \"success\",\n\t\"response\" : null",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "application/controllers/Admin.php",
    "groupTitle": "Admin"
  },
  {
    "type": "delete",
    "url": "/admin/userAttributes",
    "title": "Delete User Attributes",
    "name": "DeleteUserAttribute",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User Attribute ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"status\" : 0,\n\t\"message\" : \"success\",\n\t\"response\" : null",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "application/controllers/Admin.php",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/admin/categories",
    "title": "Retrieve Categories",
    "name": "GetCategory",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>Category ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "parentId",
            "description": "<p>Category parent ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"status\" : 0,\n\t\"message\" : \"success\",\n\t\"response\" : [{\n\t\t\tid: \"1\",\n\t\t\tname: \"Entertainment\",\n\t\t\tparentId: null,\n\t\t\tdescription: null,\n\t\t\timageUrl: null\t\t\n\t\t},\n\t\t{\n\t\t\tid: \"2\",\n\t\t\tname: \"Test1\",\n\t\t\tparentId: null,\n\t\t\tdescription: null,\n\t\t\timageUrl: null\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation Error:",
          "content": "HTTP/1.1 404 Bad Request\n{\n\t\"status\" : 220,\n\t\"message\" : \"Object Not Found\",\n\t\"errorDetail\" : \"No categories found\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "220",
            "description": "<p>Object Not Found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "application/controllers/Admin.php",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/admin/credentialTypes",
    "title": "Retrieve CredentialTypes",
    "name": "GetCredentialType",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>User attribute ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"status\" : 0,\n\t\"message\" : \"success\",\n\t\"response\" : [{\n\t\t\tid: \"1\",\n\t\t\tname: \"standard\"\t\n\t\t},\n\t\t{\n\t\t\tid: \"2\",\n\t\t\tname: \"facebook\"\n\t\t},\n\t\t{\n\t\t\tid: \"3\",\n\t\t\tname: \"google\"\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation Error:",
          "content": "HTTP/1.1 404 Bad Request\n{\n\t\"status\" : 220,\n\t\"message\" : \"Object Not Found\",\n\t\"errorDetail\" : \"No CredentialTypes found\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "220",
            "description": "<p>Object Not Found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "application/controllers/Admin.php",
    "groupTitle": "Admin"
  },
  {
    "type": "get",
    "url": "/admin/userAttributes",
    "title": "Retrieve User Attibutes",
    "name": "GetUserAttribute",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>User attribute ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"status\" : 0,\n\t\"message\" : \"success\",\n\t\"response\" : [{\n\t\t\tid: \"1\",\n\t\t\tname: \"firstName\",\n\t\t\tcreatedDate: \"2015-12-07 03:38:46\",\n\t\t\tmodifiedDate: \"2015-12-07 03:38:46\"\t\t\n\t\t},\n\t\t{\n\t\t\tid: \"2\",\n\t\t\tname: \"lastName\",\n\t\t\tcreatedDate: \"2015-12-07 03:43:43\",\n\t\t\tmodifiedDate: \"2015-12-07 03:43:43\"\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation Error:",
          "content": "HTTP/1.1 404 Bad Request\n{\n\t\"status\" : 220,\n\t\"message\" : \"Object Not Found\",\n\t\"errorDetail\" : \"No UserAttributes found\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "220",
            "description": "<p>Object Not Found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "application/controllers/Admin.php",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/categories",
    "title": "Create/Update Category",
    "name": "upsertCategory",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Category name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "imageUrl",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"status\" : 0,\n\t\"message\" : \"success\",\n\t\"response\" : null",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"status\" : 110,\n\t\"message\" : \"Validation Error\",\n\t\"errorDetail\" : \"Category name is required\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "110",
            "description": "<p>Validation Error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "117",
            "description": "<p>Parent CategoryId cannot be the same as the CategoryId</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "118",
            "description": "<p>The Category name is already in use</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "220",
            "description": "<p>Object Not found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "application/controllers/Admin.php",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/admin/userAttributes",
    "title": "Create/Update User Attributes",
    "name": "upsertUserAttribute",
    "group": "Admin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User Attribute name.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"status\" : 0,\n\t\"message\" : \"success\",\n\t\"response\" : null",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"status\" : 110,\n\t\"message\" : \"Validation Error\",\n\t\"errorDetail\" : \"User Attribute name is required\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "110",
            "description": "<p>Validation Error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "119",
            "description": "<p>The Category name is already in use</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "220",
            "description": "<p>Object Not found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "application/controllers/Admin.php",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "/passwords/change",
    "title": "Change Password",
    "name": "ChangePassword",
    "group": "Password",
    "description": "<p>OldPassword and resetToken are mutually exclusive, only one should be provided.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>Required.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "oldPassword",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "resetToken",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "userId",
            "description": "<p>Required if oldPassword is provided.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"status\" : 0,\n\t\"message\" : \"success\",\n\t\"response\" : null\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"status\" : 110,\n\t\"message\" : \"Validation Error\",\n\t\"errorDetail\" : \"newPassword is required\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "110",
            "description": "<p>Validation Error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "113",
            "description": "<p>Password does not meet criteria</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "115",
            "description": "<p>Invalid old password</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "116",
            "description": "<p>New password cannot be the same as the old password</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "121",
            "description": "<p>resetToken is expired</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "122",
            "description": "<p>resetToken is invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "220",
            "description": "<p>Object Not Found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "222",
            "description": "<p>User does not have standard credential</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "application/controllers/Passwords.php",
    "groupTitle": "Password"
  },
  {
    "type": "post",
    "url": "/passwords/reset",
    "title": "Reset Password",
    "name": "ResetPassword",
    "group": "Password",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emailAddress",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"status\" : 0,\n\t\"message\" : \"success\",\n\t\"response\" : null\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"status\" : 110,\n\t\"message\" : \"Validation Error\",\n\t\"errorDetail\" : \"emailAddress is required\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "110",
            "description": "<p>Validation Error.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "application/controllers/Passwords.php",
    "groupTitle": "Password"
  },
  {
    "type": "get",
    "url": "/portfolios/:id",
    "title": "Retrieve Portfolios",
    "name": "GetPortfolios",
    "group": "Portfolios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>Portfolio ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "categoryId",
            "description": "<p>Portfolio category ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Portfolio ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "categoryId",
            "description": "<p>Portfolio category ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>User ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdDate",
            "description": "<p>Portfolio created date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "modifiedDate",
            "description": "<p>Portfolio modified date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "videos",
            "description": "<p>An array of the Portfolio video urls.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "images",
            "description": "<p>An array of the Portfolio image urls.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"status\" : 0,\n\t\"message\" : \"success\",\n\t\"response\" : [{\n\t\t\t\"id\" : \"2\",\n\t\t\t\"categoryId\" : \"1\",\n\t\t\t\"userId\" : \"1\",\n\t\t\t\"createdDate\" : \"2015-12-27 04:37:58\",\n\t\t\t\"modifiedDate\" : \"2016-05-10 06:39:22\",\n\t\t\t\"videos\" : [{\n\t\t\t\t\"id\" : \"5\",\n\t\t\t\t\"portfolioId\" : \"2\",\n\t\t\t\t\"videoUrl\" : \"l:\\\\testdrive2.mp4\"\n\t\t\t\t}\n\t\t\t],\n\t\t\t\"images\" : [{\n\t\t\t\t\"id\" : \"4\",\n\t\t\t\t\"portfolioId\" : \"2\",\n\t\t\t\t\"imageUrl\" : \"c:\\\\secondimage.png\"\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n\t\"status\" : 220,\n\t\"message\" : \"Object Not Found\",\n\t\"errorDetail\" : \"No portfolios found\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "220",
            "description": "<p>Object Not Found.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "application/controllers/Portfolios.php",
    "groupTitle": "Portfolios"
  },
  {
    "type": "post",
    "url": "/users/activate",
    "title": "Activate User",
    "name": "ActivateUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "activationToken",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"status\" : 0,\n\t\"message\" : \"success\",\n\t\"response\" : null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"status\" : 110,\n\t\"message\" : \"Validation Error\",\n\t\"errorDetail\" : \"activationToken is required\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "110",
            "description": "<p>Validation Error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "123",
            "description": "<p>activationToken is invalid</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "application/controllers/Users.php",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/:id/credentials",
    "title": "Add User's credential",
    "name": "AddUserCredential",
    "group": "Users",
    "description": "<p>This endpoint only adds a new credential to the user's credential collection. It cannot be used to update a user's password or socialId.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User's unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "credentialType",
            "description": "<p>User's credentialType [Standard, Google, Facebook].</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>Required if credentialType is Standard.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "socialId",
            "description": "<p>Required if credentialType is Google or Facebook.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"status\" : 0,\n\t\"message\" : \"success\",\n\t\"response\" : null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"status\" : 110,\n\t\"message\" : \"Validation Error\",\n\t\"errorDetail\" : \"credentialType is required\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "110",
            "description": "<p>Validation Error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "113",
            "description": "<p>Password does not meet criteria</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "114",
            "description": "<p>User credential already exists</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "220",
            "description": "<p>Object Not Found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "application/controllers/Users.php",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create User",
    "name": "CreateUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emailAddress",
            "description": "<p>Required.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Required.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "credentialType",
            "description": "<p>User's credentialType [Standard, Google, Facebook]. Default is Standard.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>Required if credentialType is Standard.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "socialId",
            "description": "<p>Required if credentialType is Google or Facebook.</p>"
          },
          {
            "group": "Parameter",
            "type": "Dictionary",
            "optional": true,
            "field": "attributes",
            "description": "<p>A dictionary list of the User's attributes.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "emailAddress",
            "description": "<p>Email address of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Indicates whether the User is active.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "credentialTypes",
            "description": "<p>An array of the User's credentialTypes.</p>"
          },
          {
            "group": "Success 200",
            "type": "Dictionary",
            "optional": false,
            "field": "attributes",
            "description": "<p>A dictionary list of the User's attributes.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"status\" : 0,\n\t\"message\" : \"success\",\n\t\"response\" : {\n\t\t\"id\" : \"21\",\n\t\t\"emailAddress\" : \"testGSR31@mailinator.com\",\n\t\t\"username\" : \"testGSR30\",\n\t\t\"isActive\" : false,\n\t\t\"credentialTypes\" : [\"standard\"],\n\t\t\"attributes\" : {\n\t\t\t\"firstName\" : \"test\",\n\t\t\t\"lastName\" : \"GSR31\"\n\t\t}\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"status\" : 110,\n\t\"message\" : \"Validation Error\",\n\t\"errorDetail\" : \"username is required for new User creation\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "110",
            "description": "<p>Validation Error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "111",
            "description": "<p>This username is not available</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "112",
            "description": "<p>This emailAddress is already in use</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "113",
            "description": "<p>Password does not meet criteria</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "application/controllers/Users.php",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/:id/portfolios",
    "title": "Create User portfolio",
    "name": "CreateUserPortfolio",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User's unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "portfolio/categoryId",
            "description": "<p>Portfolio category ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "portfolio/videos/videoUrl",
            "description": "<p>Video URL.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "portfolio/images/imageUrl",
            "description": "<p>Image URL.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"status\" : 0,\n\t\"message\" : \"success\",\n\t\"response\" : null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"status\" : 110,\n\t\"message\" : \"Validation Error\",\n\t\"errorDetail\" : \"categoryId is required\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "110",
            "description": "<p>Validation Error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "220",
            "description": "<p>Object Not Found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "230",
            "description": "<p>User already has portfolio in this category</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "application/controllers/Users.php",
    "groupTitle": "Users"
  },
  {
    "type": "delete",
    "url": "/users/:id/credentials",
    "title": "Delete User credential",
    "name": "DeleteUserCredential",
    "group": "Users",
    "description": "<p>Deletes a User's credential. Standard credentials cannot be deleted, only social credentials.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User's ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "credentialType",
            "description": "<p>[Google, Facebook].</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"status\" : 0,\n\t\"message\" : \"success\",\n\t\"response\" : null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"status\" : 110,\n\t\"message\" : \"Validation Error\",\n\t\"errorDetail\" : \"credentialType is required\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "110",
            "description": "<p>Validation Error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "220",
            "description": "<p>Object Not Found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "223",
            "description": "<p>Standard credentials cannot be deleted, only social credentials</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "224",
            "description": "<p>Cannot delete the only remaining credential</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "225",
            "description": "<p>CredentialType does not exist for User</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "application/controllers/Users.php",
    "groupTitle": "Users"
  },
  {
    "type": "delete",
    "url": "/users/:id/portfolios",
    "title": "Delete User portfolio",
    "name": "DeleteUserPortfolio",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "portfolioId",
            "description": "<p>Portfolio ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"status\" : 0,\n\t\"message\" : \"success\",\n\t\"response\" : null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"status\" : 110,\n\t\"message\" : \"Validation Error\",\n\t\"errorDetail\" : \"The portfolio Id is required\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "110",
            "description": "<p>Validation Error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "220",
            "description": "<p>Object Not Found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "application/controllers/Users.php",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Retrieve User Information",
    "name": "GetUser",
    "group": "Users",
    "description": "<p>At least one of these id, or username, or emailAddress is required.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>User ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": "<p>User's username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "emailAddress",
            "description": "<p>User's emailAddress.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "emailAddress",
            "description": "<p>Email address of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Indicates whether the User is active.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "credentialTypes",
            "description": "<p>An array of the User's credentialTypes.</p>"
          },
          {
            "group": "Success 200",
            "type": "Dictionary",
            "optional": false,
            "field": "attributes",
            "description": "<p>A dictionary list of the User's attributes.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"status\" : 0,\n\t\"message\" : \"success\",\n\t\"response\" : {\n\t\t\"id\" : \"21\",\n\t\t\"emailAddress\" : \"testGSR31@mailinator.com\",\n\t\t\"username\" : \"testGSR30\",\n\t\t\"isActive\" : false,\n\t\t\"credentialTypes\" : [\"standard\"],\n\t\t\"attributes\" : {\n\t\t\t\"firstName\" : \"test\",\n\t\t\t\"lastName\" : \"GSR31\"\n\t\t}\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n\t\"status\" : 220,\n\t\"message\" : \"Object Not Found\",\n\t\"errorDetail\" : \"User does not exist\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "220",
            "description": "<p>Object Not Found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "application/controllers/Users.php",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/:id/attributes",
    "title": "Retrieve User Attibute Values",
    "name": "GetUserAttributeValue",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Dictionary",
            "optional": false,
            "field": "attributes",
            "description": "<p>A dictionary list of the User's attributes.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"status\" : 0,\n\t\"message\" : \"success\",\n\t\"response\" : {\n\t\t\"id\" : \"21\",\n\t\t\"attributes\" : {\n\t\t\t\"firstName\" : \"test\",\n\t\t\t\"lastName\" : \"GSR31\"\n\t\t}\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation Error:",
          "content": "HTTP/1.1 404 Bad Request\n{\n\t\"status\" : 220,\n\t\"message\" : \"Object Not Found\",\n\t\"errorDetail\" : \"User does not exist\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "220",
            "description": "<p>Object Not Found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "application/controllers/Users.php",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/:id/portfolios",
    "title": "Retrieve User portfolios",
    "name": "GetUserPortfolio",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "portfolioId",
            "description": "<p>Portfolio ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "categoryId",
            "description": "<p>Portfolio category ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "portfolios/id",
            "description": "<p>Portfolio ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "portfolios/categoryId",
            "description": "<p>Portfolio category ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "portfolios/userId",
            "description": "<p>User ID.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "portfolios/createdDate",
            "description": "<p>Portfolio created date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "portfolios/modifiedDate",
            "description": "<p>Portfolio modified date.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "portfolios/videos",
            "description": "<p>An array of the Portfolio video urls.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "portfolios/images",
            "description": "<p>An array of the Portfolio image urls.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"status\" : 0,\n\t\"message\" : \"success\",\n\t\"response\" : [{\n\t\t\t\"id\" : \"1\",\n\t\t\t\"portfolios\" : [{\n\t\t\t\t\t\"id\" : \"2\",\n\t\t\t\t\t\"categoryId\" : \"1\",\n\t\t\t\t\t\"userId\" : \"1\",\n\t\t\t\t\t\"createdDate\" : \"2015-12-27 04:37:58\",\n\t\t\t\t\t\"modifiedDate\" : \"2016-05-10 06:39:22\",\n\t\t\t\t\t\"videos\" : [{\n\t\t\t\t\t\t\"id\" : \"5\",\n\t\t\t\t\t\t\"portfolioId\" : \"2\",\n\t\t\t\t\t\t\"videoUrl\" : \"l:\\\\testdrive2.mp4\"\n\t\t\t\t\t\t}\n\t\t\t\t\t],\n\t\t\t\t\t\"images\" : [{\n\t\t\t\t\t\t\"id\" : \"4\",\n\t\t\t\t\t\t\"portfolioId\" : \"2\",\n\t\t\t\t\t\t\"imageUrl\" : \"c:\\\\secondimage.png\"\n\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n\t\"status\" : 220,\n\t\"message\" : \"Object Not Found\",\n\t\"errorDetail\" : \"No portfolios found\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "220",
            "description": "<p>Object Not Found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "application/controllers/Users.php",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "Update User",
    "name": "UpdateUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User's unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "emailAddress",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "credentialType",
            "description": "<p>User's credentialType [Standard, Google, Facebook].</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>Required if credentialType is Standard.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "socialId",
            "description": "<p>Required if credentialType is Google or Facebook.</p>"
          },
          {
            "group": "Parameter",
            "type": "Dictionary",
            "optional": true,
            "field": "attributes",
            "description": "<p>A dictionary list of the User's attributes and their corresponding values.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "emailAddress",
            "description": "<p>Email address of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "isActive",
            "description": "<p>Indicates whether the User is active.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "credentialTypes",
            "description": "<p>An array of the User's credentialTypes.</p>"
          },
          {
            "group": "Success 200",
            "type": "Dictionary",
            "optional": false,
            "field": "attributes",
            "description": "<p>A dictionary list of the User's attributes.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"status\" : 0,\n\t\"message\" : \"success\",\n\t\"response\" : {\n\t\t\"id\" : \"21\",\n\t\t\"emailAddress\" : \"testGSR31@mailinator.com\",\n\t\t\"username\" : \"testGSR30\",\n\t\t\"isActive\" : false,\n\t\t\"credentialTypes\" : [\"standard\"],\n\t\t\"attributes\" : {\n\t\t\t\"firstName\" : \"test\",\n\t\t\t\"lastName\" : \"GSR31\"\n\t\t}\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"status\" : 110,\n\t\"message\" : \"Validation Error\",\n\t\"errorDetail\" : \"username is required for new User creation\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "110",
            "description": "<p>Validation Error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "111",
            "description": "<p>This username is not available</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "112",
            "description": "<p>This emailAddress is already in use</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "113",
            "description": "<p>Password does not meet criteria</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "220",
            "description": "<p>Object Not Found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "application/controllers/Users.php",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/users/:id/emailAddress",
    "title": "Update User's emailAddress",
    "name": "UpdateUserEmailAddress",
    "group": "Users",
    "description": "<p>This endpoint is only used to change a user's emailAddress.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User's unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emailAddress",
            "description": "<p>User's emailAddress.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"status\" : 0,\n\t\"message\" : \"success\",\n\t\"response\" : null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"status\" : 110,\n\t\"message\" : \"Validation Error\",\n\t\"errorDetail\" : \"emailAddress is required\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "110",
            "description": "<p>Validation Error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "112",
            "description": "<p>This emailAddress is already in use</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "220",
            "description": "<p>Object Not Found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "application/controllers/Users.php",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/users/:id/portfolios",
    "title": "Update User portfolio",
    "name": "UpdateUserPortfolio",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User's unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "portfolio/id",
            "description": "<p>Portfolio ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "portfolio/categoryId",
            "description": "<p>Portfolio category ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "portfolio/videos/videoUrl",
            "description": "<p>Video URL.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "portfolio/images/imageUrl",
            "description": "<p>Image URL.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"status\" : 0,\n\t\"message\" : \"success\",\n\t\"response\" : null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"status\" : 110,\n\t\"message\" : \"Validation Error\",\n\t\"errorDetail\" : \"categoryId is required\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "110",
            "description": "<p>Validation Error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "220",
            "description": "<p>Object Not Found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "230",
            "description": "<p>User already has portfolio in this category</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "application/controllers/Users.php",
    "groupTitle": "Users"
  },
  {
    "type": "put",
    "url": "/users/:id/username",
    "title": "Update User's username",
    "name": "UpdateUserUsername",
    "group": "Users",
    "description": "<p>This endpoint is only used to change a user's username.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User's unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's username.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"status\" : 0,\n\t\"message\" : \"success\",\n\t\"response\" : null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"status\" : 110,\n\t\"message\" : \"Validation Error\",\n\t\"errorDetail\" : \"username is required\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "110",
            "description": "<p>Validation Error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "111",
            "description": "<p>This username is not available</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "220",
            "description": "<p>Object Not Found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "application/controllers/Users.php",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/users/:id/attributes",
    "title": "Create/Update User Attibute Values",
    "name": "UpsertUserAttributeValue",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Dictionary",
            "optional": false,
            "field": "attributes",
            "description": "<p>A dictionary list of the User's attributes and their corresponding values.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Dictionary",
            "optional": false,
            "field": "attributes",
            "description": "<p>A dictionary list of the User's attributes.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n\t\"status\" : 0,\n\t\"message\" : \"success\",\n\t\"response\" : {\n\t\t\"id\" : \"21\",\n\t\t\"attributes\" : {\n\t\t\t\"firstName\" : \"test\",\n\t\t\t\"lastName\" : \"GSR31\"\n\t\t}\n\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Validation Error:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\t\"status\" : 110,\n\t\"message\" : \"Validation Error\",\n\t\"errorDetail\" : \"attributes collection is required\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "110",
            "description": "<p>Validation Error</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "120",
            "description": "<p>Invalid User attribute</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "220",
            "description": "<p>Object Not Found</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "application/controllers/Users.php",
    "groupTitle": "Users"
  }
] });