import Activity from "../models/Activity.js";
//@desc Add emission activity for logged in user
//@route POST /api/emission
//access Private
const addEmissionData = async (req, res) => {
  try {
    const {
      electricity,
      water,
      transport,
      food,
      LPG,
      electricityDetails,
      waterDetails,
      transportDetails,
      foodDetails,
      lpgDetails,
    } = req.body;

    const total =
      (electricity || 0) +
      (water || 0) +
      (transport || 0) +
      (food || 0) +
      (LPG || 0);

    // ✅ Check userId presence
    if (!req.userId) {
      return res
        .status(401)
        .json({ message: "Unauthorized. No userId found." });
    }

    console.log("📩 Incoming Emission:", {
      userId: req.userId,
      total,
      electricityDetails,
      transportDetails,
    });

    const newActivity = new Activity({
      userId: req.userId,
      electricity,
      water,
      transport,
      food,
      LPG,
      total,
      electricityDetails,
      waterDetails,
      transportDetails,
      foodDetails,
      lpgDetails,
    });

    await newActivity.save();
    console.log("✅ Activity saved:", newActivity);

    return res.status(201).json({
      message: "Activity Added Successfully",
      activity: newActivity,
    });
  } catch (err) {
    console.error("❌ Error adding emission activity:", err);
    return res.status(500).json({
      message: "Failed to add Activity",
      error: err.message,
    });
  }
};

//@desc Get all emission activity for logged in user
//@route GET /api/emission
//access Private
const getEmissionData = async (req, res) => {
  try {
    const { range, date } = req.query;
    const userId = req.userId;
    let query = { userId };
    //If a date is provided
    if (date) {
      const selectDate = new Date(date); //Converting the string in query to date
      const nextDate = new Date(selectDate); //Clone that date
      nextDate.setDate(selectDate.getDate() + 1); //Move one day above
      //Now get the data from selectDate to nextdate(excluded)
      query.date = { $gte: selectDate, $lt: nextDate };
    } else if (range === "7days" || range === "30days") {
      //If a range is given
      const days = parseInt(range.replace("days", "")); //Extract the range
      const fromDate = new Date(); // For now
      fromDate.setDate(fromDate.getDate() - days); //Now - no of days
      query.date = { $gte: fromDate };
    }
    const activities = await Activity.find(query).sort({
      createdAt: -1,
    });
    res.status(200).json({ activities });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch activties", error: err.message });
  }
};
//@desc Get all emission summary for logged in user
//@route GET /api/emission/summary
//access Private
const getEmissionSummary = async (req, res) => {
  try {
    const { range, date } = req.query;
    const userId = req.userId;
    let query = { userId };
    //If a date is provided
    if (date) {
      const selectDate = new Date(date); //Converting the string in query to date
      const nextDate = new Date(selectDate); //Clone that date
      nextDate.setDate(selectDate.getDate() + 1); //Move one day above
      //Now get the data from selectDate to nextdate(excluded)
      query.date = { $gte: selectDate, $lt: nextDate };
    } else if (range === "7days" || range === "30days") {
      //If a range is given
      const days = parseInt(range.replace("days", "")); //Extract the range
      const fromDate = new Date(); // For now
      fromDate.setDate(fromDate.getDate() - days); //Now - no of days
      query.date = { $gte: fromDate };
    }
    const activities = await Activity.find(query); //Here we get the basic jist
    //Now for summary part
    const summary = activities.reduce(
      //this reduce is used to loop thru an array and gives a final number
      (acc, curr) => {
        //acc is the sum of a given type(like electricity) thru all different obejcts given   and curr point to the curent element
        acc.electricity += curr.electricity || 0;
        acc.water += curr.water || 0;
        acc.transport += curr.transport || 0;
        acc.food += curr.food || 0;
        acc.LPG += curr.LPG || 0;
        acc.total += curr.total || 0;
        return acc;
      },
      { electricity: 0, water: 0, transport: 0, food: 0, LPG: 0, total: 0 }
    );
    res.status(200).json(summary);
  } catch (err) {
    res.status(500).json({
      message: "Failed to calculate emission summary",
      error: err.message,
    });
  }
};
// @desc   Get emission data for a specific date
// @route  GET /api/emission/daily/:date
// @access Private
const getEmissionByDate = async (req, res) => {
  const { date } = req.params;
  const userId = req.userId;

  try {
    const selectedDate = new Date(date);
    const nextDay = new Date(selectedDate);
    nextDay.setDate(selectedDate.getDate() + 1);

    const activity = await Activity.findOne({
      userId,
      date: { $gte: selectedDate, $lt: nextDay },
    });

    if (!activity) {
      return res.status(404).json({ message: "No data found for this date." });
    }

    const {
      electricity,
      water,
      transport,
      food,
      LPG,
      total,
      electricityDetails,
      waterDetails,
      transportDetails,
      foodDetails,
      lpgDetails,
    } = activity;

    res.status(200).json({
      date,
      electricity,
      water,
      transport,
      food,
      LPG,
      total,
      details: {
        electricityDetails,
        waterDetails,
        transportDetails,
        foodDetails,
        lpgDetails,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to fetch emission for the date",
      error: err.message,
    });
  }
};
const getTodaysEmission = async (req, res) => {
  try {
    const userId = req.userId;

    const start = new Date();
    start.setHours(0, 0, 0, 0);

    const end = new Date();
    end.setHours(23, 59, 59, 999);

    const todayData = await Activity.findOne({
      userId,
      createdAt: { $gte: start, $lte: end },
    }).sort({ createdAt: -1 });

    if (!todayData) {
      return res.status(404).json({ message: "No emissions logged today" });
    }

    res.status(200).json(todayData);
  } catch (err) {
    console.error("Error fetching today's emissions:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
export {
  addEmissionData,
  getEmissionData,
  getEmissionSummary,
  getEmissionByDate,
  getTodaysEmission,
};
