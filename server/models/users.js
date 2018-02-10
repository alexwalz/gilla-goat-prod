module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        first_name: {
            type: DataTypes.STRING,
        },
        last_name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        phone: {
            type: DataTypes.STRING,
        },
        message: {
            type: DataTypes.STRING,
        },
        business: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: "Pending"
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: "End User"
        },

    }, {
        timestamps: false
        
      });

    return User;

};




