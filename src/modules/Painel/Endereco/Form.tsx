import { FieldEstacaoSelect } from '@/components/Fields/EstacaoSelect';
import { FieldTipoEndereco } from '@/components/Fields/TipoEndereco';
import { UpsertForm } from '@/components/UpsertForm';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Switch,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormValues, schema } from './model';

interface Props {
  defaultValues?: { [x: string]: any };
  handleSave: (values: FormValues) => Promise<any>;
  isLoading?: boolean;
}

export function Form({ isLoading = false, ...props }: Props) {
  return (
    <UpsertForm<FormValues>
      resolver={zodResolver(schema)}
      isLoading={isLoading}
      {...props}
      display="flex"
      flexDirection="column"
      gap={5}
    >
      {(register, errors) => (
        <>
          <Grid templateColumns="repeat(12, 1fr)" gap={5}>
            <GridItem colSpan={4}>
              <FormControl isInvalid={!!errors.rua}>
                <FormLabel>Rua:</FormLabel>
                <Input {...register('rua')} />

                <FormErrorMessage>
                  {errors.rua && errors.rua.message}
                </FormErrorMessage>
              </FormControl>
            </GridItem>
            <GridItem colSpan={4}>
              <FormControl isInvalid={!!errors.predio}>
                <FormLabel>Prédio:</FormLabel>
                <Input {...register('predio')} />

                <FormErrorMessage>
                  {errors.predio && errors.predio.message}
                </FormErrorMessage>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl isInvalid={!!errors.andar}>
                <FormLabel>Andar:</FormLabel>
                <Input {...register('andar')} />

                <FormErrorMessage>
                  {errors.andar && errors.andar.message}
                </FormErrorMessage>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl isInvalid={!!errors.apto}>
                <FormLabel>Apartamento:</FormLabel>
                <Input {...register('apto')} />

                <FormErrorMessage>
                  {errors.apto && errors.apto.message}
                </FormErrorMessage>
              </FormControl>
            </GridItem>
          </Grid>

          <Grid templateColumns="repeat(12, 1fr)" gap={5}>
            <GridItem colSpan={4}>
              <FormControl isInvalid={!!errors.direcao}>
                <FormLabel>Direção:</FormLabel>
                <Input {...register('direcao')} />

                <FormErrorMessage>
                  {errors.direcao && errors.direcao.message}
                </FormErrorMessage>
              </FormControl>
            </GridItem>
            <GridItem colSpan={8}>
              <Grid templateColumns="repeat(5, 1fr)" gap={5}>
                <GridItem>
                  <FormControl isInvalid={!!errors.altura}>
                    <FormLabel>Altura:</FormLabel>
                    <Input {...register('altura')} />

                    <FormErrorMessage>
                      {errors.altura && errors.altura.message}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl isInvalid={!!errors.largura}>
                    <FormLabel>Largura:</FormLabel>
                    <Input {...register('largura')} />

                    <FormErrorMessage>
                      {errors.largura && errors.largura.message}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl isInvalid={!!errors.profundidade}>
                    <FormLabel>Profundidade:</FormLabel>
                    <Input {...register('profundidade')} />

                    <FormErrorMessage>
                      {errors.profundidade && errors.profundidade.message}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl isInvalid={!!errors.m3}>
                    <FormLabel>M³:</FormLabel>
                    <Input {...register('m3')} />

                    <FormErrorMessage>
                      {errors.m3 && errors.m3.message}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl isInvalid={!!errors.qtdpalete}>
                    <FormLabel>Qtde Palete:</FormLabel>
                    <Input {...register('qtdpalete')} />

                    <FormErrorMessage>
                      {errors.qtdpalete && errors.qtdpalete.message}
                    </FormErrorMessage>
                  </FormControl>
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
          <Grid templateColumns="repeat(3, 1fr)" gap={5}>
            <GridItem>
              <FieldTipoEndereco
                isInvalid={!!errors.idtipoendereco}
                errorMessage={errors.idtipoendereco?.message}
                inputProps={register('idtipoendereco')}
              />
            </GridItem>
            <GridItem>
              <FieldEstacaoSelect
                isInvalid={!!errors.idestacao}
                errorMessage={errors.idestacao?.message}
                inputProps={register('idestacao')}
              />
            </GridItem>
            <GridItem>
              <FormControl isInvalid={!!errors.iddeposito}>
                <FormLabel>Depósito:</FormLabel>
                <Input {...register('iddeposito')} />

                <FormErrorMessage>
                  {errors.iddeposito && errors.iddeposito.message}
                </FormErrorMessage>
              </FormControl>
            </GridItem>
          </Grid>

          <FormControl isInvalid={!!errors.status}>
            <FormLabel htmlFor="email-alerts" mb="0">
              Ativo?
            </FormLabel>
            <Switch {...register('ativo')} ml={2} />
          </FormControl>
        </>
      )}
    </UpsertForm>
  );
}
