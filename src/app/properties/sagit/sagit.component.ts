import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { PropertyService } from '../../property.service';

@Component({
  selector: 'app-sagit',
  templateUrl: './sagit.component.html',
  styleUrls: ['./sagit.component.scss']
})
export class SagitComponent implements OnInit {
  sagitForm: FormGroup;
  firstStep;
  landStep;
  houseStep;
  imageStep;
  selectedImages = [];
  imgPreviewURL = [];
  propertyType: string;
  constructor(private sagitService: PropertyService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.sagitForm = this.fb.group({
      sagitFormGroup: this.fb.array([
        this.fb.group({
          title: [
            'Property For Deal',
            [
              Validators.required,
              Validators.minLength(15),
              Validators.maxLength(55)
            ]
          ],
          dealType: [
            'For Rent',
            [
              Validators.required,
              Validators.minLength(5)
            ]
          ],
          price: [
            20000,
            [
              Validators.required,
              Validators.max(10000000000),
              Validators.min(1000)
            ]
          ],
          status: [
            'No Bid Yet',
            [
              Validators.required,
              Validators.minLength(5),
              Validators.maxLength(19)
            ]
          ],
          state:[
            'Enugu',
            [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(15),
            ]
          ],
          lga: [
            'Enugu South',
            [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(15),
            ]
          ],
          town: [
            'Ugwuaji',
            [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(15),
            ]
          ],
          desc: [
            'Well built and painted in a secure environs',
            [
              Validators.minLength(3),
              Validators.maxLength(255),
            ]
          ],
          purpose: [
            'Commercial',
            [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(15),
            ]
          ],
          brokerFee: [
            0,
            [
              Validators.required
            ]
          ],
        // ... form controls for our step
        }),
        this.fb.group({
          plots: [
            1,
            [
              Validators.required,
              Validators.min(1),
              Validators.max(1000)
            ]
          ],
          size: [
            '2500',
            [
              Validators.required,
              Validators.min(50),
              Validators.max(1000000)
            ]
          ],
          unit: [
            '',
            [
              Validators.required
            ]
          ],
          allocationType: [
            'Community Land',
            [
              Validators.required,
              Validators.minLength(5),
              Validators.maxLength(55)
            ]
          ],

        }),
        this.fb.group({
          totalRooms: [
            1,
            [
              Validators.required,
              Validators.min(0),
              Validators.max(1000)
            ]
          ],
          bedrooms:[
            1,
            [
              Validators.required,
              Validators.min(0),
              Validators.max(100)
            ]
          ],
          bathrooms: [
            1,
            [
              Validators.required,
              Validators.min(0),
              Validators.max(100)
            ]
          ],
          parkingSpace: [
            '',
            [
              Validators.required
            ]
          ],
          parkingSpaceSize: [
            1,
            [
              Validators.required,
              Validators.max(200)
            ]
          ],
          firstResident: [
            '',
            [
              Validators.required
            ]
          ],
          furnishing: [
            '',
            [
              Validators.required
            ]
          ],
          housingQuality: [
            '',
            [
              Validators.required
            ]
          ],
          smoking: [
            '',
            [
              Validators.required
            ]
          ],
          pets: [
            '',
            [
              Validators.required
            ]
          ],
          parties: [
            '',
            [
              Validators.required
            ]
          ],
          minimumRent: [
            '',
            [
              Validators.required,
              Validators.min(1000),
              Validators.max(10000000)
            ]
          ],
          water: [
            '',
            [
              Validators.required
            ]
          ],
          light: [
            '',
            [
              Validators.required
            ]
          ],
          fenced: [
            '',
            [
              Validators.required,
              Validators.minLength(2),
              Validators.maxLength(55)
            ]
          ],
          facilities: [
            '',
            [
              Validators.minLength(5),
              Validators.maxLength(255)
            ]
          ],
          guestCapacity: [
            '',
            [
              Validators.required
            ]
          ],
        }),
        this.fb.group({
          images: this.fb.array([
            this.fb.control('',[Validators.required])
          ])
        })
      ])
    })
    this.sagitForm.valueChanges.subscribe(val=>{
      console.log(val);
    })
    this.firstStep = this.sagitForm.get('sagitFormGroup.0') as FormArray;
    this.landStep = this.sagitForm.get('sagitFormGroup.1') as FormArray;
    this.houseStep = this.sagitForm.get('sagitFormGroup.2') as FormArray;
    this.imageStep = this.sagitForm.get('sagitFormGroup.3') as FormArray;
    //console.log(this.firstStep);
  }
  get images(){
    return this.imageStep.get('images') as FormArray;
  }
  get title(){
    return this.firstStep.get('title')
  }
  get dealType(){
    return this.firstStep.get('dealType')
  }
  get price(){
    return this.firstStep.get('price')
  }
  get status(){
    return this.firstStep.get('status')
  }
  get state(){
    return this.firstStep.get('state')
  }
  get lga(){
    return this.firstStep.get('lga')
  }
  get town(){
    return this.firstStep.get('town')
  }
  get desc(){
    return this.firstStep.get('desc')
  }
  get purpose(){
    return this.firstStep.get('purpose')
  }
  get brokerFee(){
    return this.firstStep.get('brokerFee')
  }
  get plots(){
    return this.landStep.get('plots')
  }
  get size(){
    return this.landStep.get('size')
  }
  get unit(){
    return this.landStep.get('unit')
  }
  get allocationType(){
    return this.landStep.get('allocationType')
  }
  get totalRooms(){
    return this.houseStep.get('totalRooms')
  }
  get bedrooms(){
    return this.houseStep.get('bedrooms')
  }
  get bathrooms(){
    return this.houseStep.get('bathrooms')
  }
  get firstResident(){
    return this.houseStep.get('firstResident')
  }
  get parkingSpace(){
    return this.houseStep.get('parkingSpace')
  }
  get parkingSpaceSize(){
    return this.houseStep.get('parkingSpaceSize')
  }
  get furnishing(){
    return this.houseStep.get('furnishing')
  }
  get housingQuality(){
    return this.houseStep.get('housingQuality')
  }
  get smoking(){
    return this.houseStep.get('smoking')
  }
  get pets(){
    return this.houseStep.get('pets')
  }
  get parties(){
    return this.houseStep.get('parties')
  }
  get minimumRent(){
    return this.houseStep.get('minimumRent')
  }
  get water(){
    return this.houseStep.get('water')
  }
  get light(){
    return this.houseStep.get('light')
  }
  get fenced(){
    return this.houseStep.get('fenced')
  }
  get facilities(){
    return this.houseStep.get('facilities')
  }
  get guestCapacity(){
    return this.houseStep.get('guestCapacity')
  }
  setPropertyType(type){
    this.propertyType = type;
    if(type == "land"){
      this.houseStep.status = "VALID"
    }
    else if(type == "house"){
      this.landStep.status = "VALID"
    }
  }
  imgPosition(index){
    return ++index;
  }
  getPreviewInfo(previewObj){
    let loopIteration = 0;
    let imgOption1;
    for(let v in previewObj){
      if(loopIteration == 0){
        imgOption1 = previewObj[v]
      }
      loopIteration++
    }
    return imgOption1
  }
  addImages(){
    this.images.push(this.fb.control(''))
    console.log('Loging landStep values. Length is: ', Object.keys(this.landStep.controls).length)
    let anotherStep = {...this.landStep}
    delete this.landStep.controls.water
    console.log(anotherStep.status)
    console.log('Finished Loging landStep values. Length is: ', Object.keys(this.landStep.controls).length)
  }
  removeImage(index:number){
    this.images.removeAt(index)
    console.log(`before filter and id is ${index}`)
    console.log(this.imgPreviewURL)
    this.imgPreviewURL = this.imgPreviewURL.filter(item=>{
      return item.controlIndex != index
    })
    this.selectedImages = this.selectedImages.filter(item=>{
      return item.controlIndex != index
    })
    for(let item of this.imgPreviewURL){
      if(+item.controlIndex > +index){
        console.log(`this index ${item.controlIndex} is greater than deleted index ${index}`)
        item.controlIndex = +item.controlIndex - 1
      }
    }
    console.log('after filter')
    console.log(this.imgPreviewURL)
  }
  onAlert(){
    alert('Preview image clicked')
  }
  onImageSelected(event,controlIndex){
    let imgPreviewObj = {}
    let selectedImgObj = {}
    let targetImg = event.target.files[0]
    selectedImgObj['controlIndex'] = controlIndex;
    selectedImgObj[controlIndex] = targetImg
    this.selectedImages.push(selectedImgObj)
    var reader = new FileReader();
    reader.readAsDataURL(targetImg);
    reader.onload = (e:any)=>{
      imgPreviewObj['controlIndex'] = controlIndex;
      imgPreviewObj[controlIndex] = e.target.result;
      this.imgPreviewURL.push(imgPreviewObj);
      console.log(targetImg.name)
    }
    console.log('image selected')
    //console.log(event)
  }
  sagit(){
    let propertyForm = new FormData()
    let propertyDetails = this.sagitForm.value
    let propDetailIndex;
    switch(this.propertyType){
      case "land":
      propDetailIndex = 1
      break
      case "house":
      propDetailIndex = 2
      break
      case "others":
      propDetailIndex = 3
    }
    let postData = Object.assign({},propertyDetails.sagitFormGroup[0],propertyDetails.sagitFormGroup[propDetailIndex])
    for(let key in postData){
      propertyForm.append(key, postData[key])
    }
    //attach property type
    propertyForm.append('type', this.propertyType)
    //add image files
    for(let image of this.selectedImages){
      let loopIteration = 0;
      for(let objKey in image){
        if(loopIteration == 0){
            propertyForm.append('images[]', image[objKey])
          }
        loopIteration++
      }
    }
    //attach property type
    this.sagitService.postProperty(propertyForm).subscribe(res=>{
      console.log(res);
    });
    console.log('Listing New Property');
  }
}
