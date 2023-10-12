const { constructorResponse } = require('../../helpers');
const { Catalog } = require('../../models');

const getByFilter = async (req, res, next) => {
  try {
    const isPagination = req.query.page;
    const {
      sort,
      search,
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
    console.log('REQ.QUERY:', req.query);

    const category = req.params.category;
    console.log('REQ.PARAMS:', req.params);

    const limit = perPage * 1;
    const skip = perPage * (page - 1);

    let total = await Catalog.find({ category }).count();
    let catalog = [];
    const constructorData = {
      pagination: isPagination,
      total,
      perPage,
      page,
    };
    let filterConstructor = {};

    if (category !== '' && category !== undefined) {
      filterConstructor.category = category;
    }
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
    console.log('FILTER:', filterConstructor);

    if (search) {
      total = await Catalog.find({
        name: { $regex: search },
      }).count();
      constructorData.total = total;

      const catalog = await Catalog.find({
        name: { $regex: search },
      });

      const group = await Catalog.find({
        typeOfPlants: { $regex: search },
      });

      // console.log('SEARCH ~products:', catalog);
      // console.log('SEARCH ~total products:', total);
      // console.log('SEARCH ~group:', group);

      res.status(200).json({ catalog, total, group });
    }

    if (isPagination) {
      if (category) {
        total = await Catalog.find({ category: { $regex: category } }).count();
        constructorData.total = total;
        catalog = await Catalog.find({ category: { $regex: category } })
          .limit(limit)
          .skip(skip)
          .sort();
      }
      if (sort == 'rating') {
        total = await Catalog.find({ ...filterConstructor }).count();
        constructorData.total = total;
        catalog = await Catalog.find({ ...filterConstructor })
          .limit(limit)
          .skip(skip)
          .sort({ rating: -1 });
      }

      if (sort == 'minMaxPrice') {
        total = await Catalog.find({ ...filterConstructor }).count();
        constructorData.total = total;
        catalog = await Catalog.find({ ...filterConstructor })
          .limit(limit)
          .skip(skip)
          .sort({ currentPrice: 1 });
      }

      if (sort == 'maxMinPrice') {
        total = await Catalog.find({ ...filterConstructor }).count();
        constructorData.total = total;
        catalog = await Catalog.find({ ...filterConstructor })
          .limit(limit)
          .skip(skip)
          .sort({ currentPrice: -1 });
      }

      if (sort == 'discount') {
        total = await Catalog.find({ ...filterConstructor }).count();
        constructorData.total = total;
        catalog = await Catalog.find({ ...filterConstructor })
          .limit(limit)
          .skip(skip)
          .sort({ discount: -1 });
      }

      total = await Catalog.find({ ...filterConstructor }).count();
      constructorData.total = total;
      catalog = await Catalog.find({ ...filterConstructor })
        .limit(limit)
        .skip(skip)
        .sort(sort);

      return res.status(200).json({ catalog, total });
    } else {
      filterConstructor.category = { $regex: category };
      total = await Catalog.find({ ...filterConstructor }).count();
      constructorData.total = total;
      const catalog = await Catalog.find({ ...filterConstructor });
      res.status(200).json({ catalog, total });
      // const catalog = await Catalog.find();
      // return res.status(200).json(catalog);
    }
  } catch (error) {
    res.status(400).json({ message: 'Invalid filters characters' });
  }
};

module.exports = getByFilter;
