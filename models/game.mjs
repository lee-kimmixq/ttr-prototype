export default function initGameModel(sequelize, DataTypes) {
  return sequelize.define(
    'game',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      gameState: {
        allowNull: false,
        type: DataTypes.JSON,
      },
      active: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      underscored: true,
    },
  );
}
