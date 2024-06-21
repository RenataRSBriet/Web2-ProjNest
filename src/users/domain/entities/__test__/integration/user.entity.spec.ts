import { EntityValidationError } from "@/users/domain/errors/validation-error";
import { UserDataBuilder } from "@/users/domain/testing/helpers/user-data-builder";
import { UserEntity,  UserProps} from "@/users/domain/entities/user.entity";
import { PROPERTY_DEPS_METADATA } from "@nestjs/common/constants";


let props: UserProps; 


describe('UserEntity integration tests', () => {
    beforeEach(() => {
        props = UserDataBuilder({});
    })

    describe('Constructor method', () => {

        it('Should throw an error when creating a user with invalid name - null', () => {
            const valid: UserProps = {
                ...props,
                name: null as any
            }
            expect(() => new UserEntity(valid)).toThrow(EntityValidationError);
        })

        
        it('Should throw an error when creating a user with invalid name - empty', () => {
            const valid: UserProps = {
                ...props,
                name: '' as any
            }
            expect(() => new UserEntity(valid)).toThrow(EntityValidationError);
        })

        
        it('Should throw an error when creating a user with invalid name - no String', () => {
            const valid: UserProps = {
                ...props,
                name: 10 as any
            }
            expect(() => new UserEntity(valid)).toThrow(EntityValidationError);
        })


        
        it('Should throw an error when creating a user with invalid name - large', () => {
            const valid: UserProps = {
                ...props,
                name: 'a'.repeat(256) as any
            }
            expect(() => new UserEntity(valid)).toThrow(EntityValidationError);
        })

        //email

        it('Should throw an error when creating a user with invalid email - null', () => {
            const valid: UserProps = {
                ...props,
                email: null as any
            }
            expect(() => new UserEntity(valid)).toThrow(EntityValidationError);
        })

        
        it('Should throw an error when creating a user with invalid email - empty', () => {
            const valid: UserProps = {
                ...props,
                email: '' as any
            }
            expect(() => new UserEntity(valid)).toThrow(EntityValidationError);
        })

        
        it('Should throw an error when creating a user with invalid email - no String', () => {
            const valid: UserProps = {
                ...props,
                email: 10 as any
            }
            expect(() => new UserEntity(valid)).toThrow(EntityValidationError);
        })

        it('Should throw an error when creating a user with invalid email - no e-mail', () => {
            const valid: UserProps = {
                ...props,
                email: "qualquercoisa" as any
            }
            expect(() => new UserEntity(valid)).toThrow(EntityValidationError);
        })
        
        it('Should throw an error when creating a user with invalid email - large', () => {
            const valid: UserProps = {
                ...props,
                email: 'a'.repeat(256) as any
            }
            expect(() => new UserEntity(valid)).toThrow(EntityValidationError);
        })

        //password

        it('Should throw an error when creating a user with invalid password - null', () => {
            const valid: UserProps = {
                ...props,
                password: null as any
            }
            expect(() => new UserEntity(valid)).toThrow(EntityValidationError);
        })

        
        it('Should throw an error when creating a user with invalid password - empty', () => {
            const valid: UserProps = {
                ...props,
                password: '' as any
            }
            expect(() => new UserEntity(valid)).toThrow(EntityValidationError);
        })

        
        it('Should throw an error when creating a user with invalid password - no string', () => {
            const valid: UserProps = {
                ...props,
                password: 10 as any
            }
            expect(() => new UserEntity(valid)).toThrow(EntityValidationError);
        })


        
        it('Should throw an error when creating a user with invalid password - large', () => {
            const valid: UserProps = {
                ...props,
                password: 'a'.repeat(101
                    ) as any
            }
            expect(() => new UserEntity(valid)).toThrow(EntityValidationError);
        })

        //createdAt

        
        it('Should throw an error when creating a user with invalid createdAt - string', () => {
            const valid: UserProps = {
                ...props,
                createdAt: '2024' as any
            }
            expect(() => new UserEntity(valid)).toThrow(EntityValidationError);
        })

        
        it('Should throw an error when creating a user with invalid createdAt -number', () => {
            const valid: UserProps = {
                ...props,
                createdAt: 10 as any
            }
            expect(() => new UserEntity(valid)).toThrow(EntityValidationError);
        })

        it('Should an valid user', () => {
            expect.assertions(0)
            const valid: UserProps = {
                ...props,
            }
            new UserEntity(valid);
        })
    })

    describe('Update method', () => {
        it('Should throw an error when updating a user with invalid name - null', () => {
            const user = new UserEntity(props)
            expect(() => user.updateName(null as any)).toThrow(EntityValidationError)
        })
        
        it('Should throw an error when updating a user with invalid name - empty', () => {
            const user = new UserEntity(props)
            expect(() => user.updateName('' as any)).toThrow(EntityValidationError)
        })

        it('Should throw an error when updating a user with invalid name - no string', () => {
            const user = new UserEntity(props)
            expect(() => user.updateName(10 as any)).toThrow(EntityValidationError)
        })

        
        it('Should throw an error when updating a user with invalid name - large', () => {
            const user = new UserEntity(props)
            expect(() => user.updateName('a'.repeat(256) as any)).toThrow(EntityValidationError)
        })
        
        it('Should an valid user', () => {
            expect.assertions(0)
            const user = new UserEntity(props)
            user.updateName('new name')
        })
    })

    describe('Update password method', () => {
        it('should throw an error when updating a user with invalid password - null', () => {
            const user = new UserEntity(props)
            expect(() => user.updatePassword(null as any)).toThrow(EntityValidationError)
        })

        it('should throw an error when updating a user with invalid password - empty', () => {
            const user = new UserEntity(props)
            expect(() => user.updatePassword('' as any)).toThrow(EntityValidationError)
        })

        it('should throw an error when updating a user with invalid password - no String', () => {
            const user = new UserEntity(props)
            expect(() => user.updatePassword(10 as any)).toThrow(EntityValidationError)
        })

        it('should throw an error when updating a user with invalid password - large', () => {
            const user = new UserEntity(props)
            expect(() => user.updatePassword('a'.repeat(101) as any)).toThrow(EntityValidationError)
        })

        it('Should an valid user', () => {
            expect.assertions(0)
            const user = new UserEntity(props)
            user.updateName('new password')
        })
    })
})

