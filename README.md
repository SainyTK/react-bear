ขั้นตอน
-------- BASIC ---------
1. สร้าง store
2. สร้าง bear reducer (get)
3. คลุม App ด้วย Provider
4. ใช้ dispatch เพื่อดึงข้อมูล bears
5. ใช้ use selector เพื่อแสดงข้อมูล bears
------- เพิ่ม logger middlewares --------
6. เพิ่ม (add) ใน bear reducer
7. ให้ form เรียกใช้ dispatch (add)
8. เพิ่ม (delete) ใน bear reducer
9. ให้ bear card เรียกใช้ dispatch (delete)
10. เพิ่ม form reducer (change name, change weight, change img)
11. ให้ form เรียกใช้ dispatch (change name, change weight, change img)
12. ใช้ use selector ดึงข้อมูล form ใน bear card
13. ใช้ข้อมูลจาก form ในการอัพเดทข้อมูล โดยเรียกใช้ dispatch (update)
-------- Bind Action ---------
14. สร้าง bear actions และ form actions 
15. ใช้ bindActionsCreator
-------- Thunk -----------
16. แก้ actions ให้มีการดึงข้อมูลจากเซิฟเวอร์