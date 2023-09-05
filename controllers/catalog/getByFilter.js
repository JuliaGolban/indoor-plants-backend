const { constructorResponse } = require('../../helpers');
const { Catalog } = require('../../models');

const getByFilter = async (req, res, next) => {
  try {
    const isPagination = req.query.page;
    const {
      sort,
      typeOfPlants,
      light,
      petFriendly,
      rare,
      hardToKill,
      potSize,
      waterSchedule,
      minPrice,
      maxPrice,
      page,
      perPage,
    } = req.query;
    console.log('req.query:', req.query);

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
    if (
      minPrice !== '' &&
      minPrice !== undefined &&
      maxPrice !== '' &&
      maxPrice !== undefined
    ) {
      filterConstructor.currentPrice = {
        $gte: minPrice,
        $lte: maxPrice,
      };
    }
    if (potSize !== '' && potSize !== undefined) {
      const potSizeForFilter = 'potSize.size';
      filterConstructor[potSizeForFilter] = potSize;
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

    console.log('filterConstructor:', filterConstructor);

    if (isPagination) {
      if (sort == 'rating') {
        total = await Catalog.find({ ...filterConstructor }).count();
        constructorData.total = total;
        catalog = await Catalog.find({ ...filterConstructor })
          .limit(limit)
          .skip(skip)
          .sort({ rating: -1 });

        res.status(200).json({ catalog, total });
      }

      if (sort == 'minMaxPrice') {
        total = await Catalog.find({ ...filterConstructor }).count();
        constructorData.total = total;
        catalog = await Catalog.find({ ...filterConstructor })
          .limit(limit)
          .skip(skip)
          .sort({ currentPrice: 1 });

        res.status(200).json({ catalog, total });
      }

      if (sort == 'maxMinPrice') {
        total = await Catalog.find({ ...filterConstructor }).count();
        constructorData.total = total;
        catalog = await Catalog.find({ ...filterConstructor })
          .limit(limit)
          .skip(skip)
          .sort({ currentPrice: -1 });

        res.status(200).json({ catalog, total });
      }

      if (sort == 'discount') {
        total = await Catalog.find({ ...filterConstructor }).count();
        constructorData.total = total;
        catalog = await Catalog.find({ ...filterConstructor })
          .limit(limit)
          .skip(skip)
          .sort({ discount: -1 });

        res.status(200).json({ catalog, total });
      }

      total = await Catalog.find({ ...filterConstructor }).count();
      constructorData.total = total;
      catalog = await Catalog.find({ ...filterConstructor })
        .limit(limit)
        .skip(skip)
        .sort(sort);

      res.status(200).json({ catalog, total });
    } else {
      const catalog = await Catalog.find();
      res.status(200).json(catalog);
    }
  } catch (error) {
    res.status(400).json({ message: 'Invalid filters characters' });
  }
};

module.exports = getByFilter;
