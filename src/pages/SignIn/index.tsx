import React from 'react';
import * as S from './styles';
import { useForm, SubmitHandler } from "react-hook-form";
import { useAuth } from '../../hooks/auth'
import Logo from '../../components/Logo';
import InputText from '../../components/Inputs/InputText';
import Button from '../../components/Button';
import RotatingText from '../../components/RoratingText';

type Inputs = {
  email: string,
  password: string,
};

const SignIm: React.FC = () => {
  const { signIn } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit: SubmitHandler<Inputs> = data => signIn(data.email, data.password);
  const rotatingItems = ['Reduce maintenance costs by up to 60%', 'Increase the uptime of your machines by up to 50%', 'Reduce the number of unexpected breaks by up to 55%', 'Have control', 'Monitor your machines', 'Avoid failures', 'Avoid downtime', 'Manages online', 'Your team with the best performance']

  return (
    <S.Container>
      <S.LeftSide>
        <Logo />
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>
            Sign in for <br/>
            <span>Manage</span>.
          </h2>

          <label htmlFor="email">Email</label>
          <InputText name="email" type="email" register={register} required/>
          {errors.email && <span>check your email</span>}
          
          <label htmlFor="password">Password</label>
          <InputText name="password" type="password" register={register} required/>
          {errors.password && <span>check your password</span>}
          
          <div className="buttons">
            <Button>Log In</Button>
            <a href="https://github.com/Wtheodoro/machine-manager" target="_blank" rel="noreferrer">
              Forgot Password?
            </a>
          </div>
        </form>
      </S.LeftSide>
      
      <S.RightSide>
        <S.RotatingWrapper>
          <RotatingText items={[...rotatingItems]}/>
        </S.RotatingWrapper>
      </S.RightSide>
    </S.Container>
  )
}

export default SignIm;