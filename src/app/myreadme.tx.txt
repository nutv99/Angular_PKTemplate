1. cd เข้า src/app
2. ng generate library pickalllib จะ gen Boilerplate-->projects/pickalllib/src/pickalllib.service.ts และ อืนๆ มาให้
พร้อมทั้ง update-->angular.json, package.json ,tsconfig.json
3.กรณียังไม่ได้ Build การ Import จะใช้
   import { PickalllibService } from './../../projects/pickalllib/src/lib/pickalllib.service';
4.การ Build Lib --> มาที่ projects/pickalllib/src/lib แล้ว open in intergrate Terminal
5.เมื่อ Build เสร็จสามารถเรียกใช้ ในแบบ
  import { PickalllibService} from 'pickalllib'
  from 'pickalllib' ตัว pickalllib คือชื่อ folder ที่เก็บ lib ไว้ ให้ดู ใต้  projects ลงมา 1 ชั้น

------ สิ่งที่ควรสร้างใน lib --------
1. lib สำหรับ api เช่น  Add,Edit,Delete,Get
2. lib สำหรับ แสดงผลพวก Pipe,Table
3. lib สำหรับ จัดการ jwt
4. lib สำหรับ localStorage
5. lib สำหรับ กำหนด ค่าคงที่ต่างๆ เช่น domainname
6. lib สำหรับ เก็บค่่า import ต่างๆ
7. lib สำหรับ กำหนดค่า Theme สี หรือใช้ ViewChild
8. Gen Service สำหรับแต่ละ Table
9. Gen Interface สำหรับแต่ละ Table

10.npm i --save-dev @types/lodash ติดตั้ง lodash ใน lib API service
//11.npm install --save @angular/material @angular/cdk @angular/animations
12 ng add @angular/material  ทั้งใน projects,lib
13. Auth Guard
     1.Auth.service.ts สำหรับเป็น Authorized Service
     2.Auth-Guard.service.ts สำหรับเป็น Guard Service
     3.

