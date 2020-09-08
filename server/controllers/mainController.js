const { Doctor, Doctor_Type, Hospital, Work_Place, Specialty, Disease_Specialty, Docktor_Practice_Time, Practice_time } = require ('../models')

class MainController{
  static viewAllDoctors(req,res, next){
    Doctor.findAll()
    // Work_Place.findAll({include: ["Hospital", "Doctor"]})
    .then( data => {
      return res.status(200).json(data.slice(0,3))
    })
    .catch ( err => {
      console.log(err)
      return res.status(500).json(err)
    })
  }

  static viewAllWorkPlace(req,res, next){
    Work_Place.findAll({include: ["Hospital", "Doctor"]})
    .then( data => {
      return res.status(200).json(data)
    })
    .catch ( err => {
      console.log(err)
      return res.status(500).json(err)
    })
  }

  static findOneWorkPlace(req,res, next){
    Work_Place.findOne({where: {DoctorId: req.params.doctorId},include: ["Hospital", "Doctor"]})
    .then( data => {
      return res.status(200).json(data)
    })
    .catch ( err => {
      console.log(err)
      return res.status(500).json(err)
    })
  }

  static findOnePracticeTime(req,res, next){
    Docktor_Practice_Time.findOne({where: {DoctorId: req.params.doctorId},include: ["Practice_time", "Doctor"]})
    .then( data => {
      return res.status(200).json(data)
    })
    .catch ( err => {
      console.log(err)
      return res.status(500).json(err)
    })
  }

  static viewTypes(req,res, next){
    Doctor_Type.findAll()
    .then( data => {
        return res.status(200).json(data)
    })
    .catch ( err => {
      console.log(err)
      return res.status(500).json(err)
    })
  }

  static viewSpecialties(req,res, next){
    Specialty.findAll({include: ["Skill", "Doctor"]})
    .then( data => {
        return res.status(200).json(data)
    })
    .catch ( err => {
      console.log(err)
      return res.status(500).json(err)
    })
  }

  static viewDiseasesSpecialties(req,res, next){
    Disease_Specialty.findAll({include: ["Disease", "Doctor"]})
    .then( data => {
        return res.status(200).json(data)
    })
    .catch ( err => {
      console.log(err)
      return res.status(500).json(err)
    })
  }

  static viewDoctorPracticeTimes(req,res, next){
    Docktor_Practice_Time.findAll({include: ["Practice_time", "Doctor"]})
    .then( data => {
        return res.status(200).json(data)
    })
    .catch ( err => {
      console.log(err)
      return res.status(500).json(err)
    })
  }
}

module.exports = MainController