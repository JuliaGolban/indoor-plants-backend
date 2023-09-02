const { constructorResponse } = require('../../helpers');
const { Catalog } = require('../../models');

const getByFilter = async (req, res, next) => {
  try {
    const isPagination = req.query.page;
    console.log('getByFilter ~ isPagination:', isPagination);
    const {
      typeOfPlants,
      light,
      petFriendly,
      rare,
      hardToKill,
      potSize,
      waterSchedule,
      minPrice,
      maxPrice,
      page = req.query.page,
      perPage = req.query.perPage,
    } = req.query;
    console.log('getByFilter ~ req.query:', req.query);

    const limit = perPage * 1;
    const skip = perPage * (page - 1);

    let filterConstructor = {};

    if (typeOfPlants !== '' && typeOfPlants !== undefined) {
      filterConstructor.typeOfPlants = typeOfPlants;
    }
    if (rare !== '' && rare !== undefined) {
      filterConstructor.rare = rare;
    }
    if (hardToKill !== '' && hardToKill !== undefined) {
      filterConstructor.hardToKill = hardToKill;
    }
    if (light !== '' && light !== undefined) {
      filterConstructor.light = light;
    }
    if (petFriendly !== '' && petFriendly !== undefined) {
      filterConstructor.petFriendly = petFriendly;
    }
    if (minPrice !== '' && minPrice !== undefined) {
      filterConstructor.minPrice = minPrice;
    }
    if (maxPrice !== '' && maxPrice !== undefined) {
      filterConstructor.maxPrice = maxPrice;
    }
    if (potSize !== '' && potSize !== undefined) {
      filterConstructor.potSize = potSize;
    }
    if (waterSchedule !== '' && waterSchedule !== undefined) {
      filterConstructor.waterSchedule = waterSchedule;
    }

    let total = await Catalog.find().count();
    let catalog = [];
    const constructorData = {
      pagination: isPagination,
      total,
      perPage,
      page,
    };

    if (isPagination) {
      total = await Catalog.find({ ...filterConstructor }).count();
      constructorData.total = total;
      catalog = await Catalog.find({ ...filterConstructor })
        .limit(limit)
        .skip(skip)
        .sort({ createdAt: -1 });

      res.status(200).json({ catalog, total });

      if (minPrice) {
        filterConstructor.currentPrice = { currentPrice: { $gte: minPrice } };
        total = await Catalog.find({
          ...filterConstructor,
        }).count();
        constructorData.total = total;
        catalog = await Catalog.find({
          ...filterConstructor,
        })
          .limit(limit)
          .skip(skip)
          .sort({ createdAt: -1 });

        res.status(200).json({ catalog, total });
      }
      if (maxPrice) {
        (filterConstructor.currentPrice = { currentPrice: { $lte: maxPrice } }),
          (total = await Catalog.find({
            ...filterConstructor,
          }).count());
        constructorData.total = total;
        catalog = await Catalog.find({
          ...filterConstructor,
        })
          .limit(limit)
          .skip(skip)
          .sort({ createdAt: -1 });

        res.status(200).json({ catalog, total });
      }
      if (minPrice && maxPrice) {
        filterConstructor.currentPrice = {
          $and: [
            { currentPrice: { $gte: minPrice } },
            { currentPrice: { $lte: maxPrice } },
          ],
        };
        total = await Catalog.find({
          ...filterConstructor,
        }).count();
        constructorData.total = total;
        catalog = await Catalog.find({
          ...filterConstructor,
        })
          .limit(limit)
          .skip(skip)
          .sort({ createdAt: -1 });

        res.status(200).json({ catalog, total });
      }
    } else {
      const catalog = await Catalog.find();
      res.status(200).json(catalog);
    }
  } catch (error) {
    res.status(400).json({ message: 'Invalid filters characters' });
  }
};

module.exports = getByFilter;
