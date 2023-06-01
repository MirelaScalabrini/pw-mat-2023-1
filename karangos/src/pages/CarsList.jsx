import React from 'react'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import { format } from 'date-fns'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Link } from 'react-router-dom'

export default function CarsList(){

    const [state, setState] = React.useState({
        cars: {}
    })
    //Desestruturando as variáveis de estado
    const {
        cars
    } = state

    // Este useEffect() será executado apenas uma vez, durante o carregamento da página
    React.useEffect(() => {
        loadData()    //Carrega dos dados do back-end
    }, [])

    async function loadData(){
        try {
            const result = await fetch('https://api.faustocintra.com.br/cars')

            // Requisição ok
            if(result.ok) setState({...state, cars: await result.json()})

            //Requisição com erro
            else throw new Error(`[HTTP ${result.status}] ${result.statusText}`)
        }
        catch(error){
            // Exibimos o erro no console
            console.error(error)
        }
    }
    // Exibe as colunas com os campos e seus respectivos nomes e valores
    const columns = [
        { field: 'id', 
        headerName: 'ID', 
        width: 90 
        },
        { field: 'brand', 
        headerName: 'Marca', 
        width: 90 },
        {
          field: 'model',
          headerName: 'Modelo',
          width: 300
        },
        {
            field: 'color',
            headerName: 'Cor',
            align: 'center',
            headerAlign: 'center',
            width: 150
        },
        {
          field: 'year_manufacture',
          headerName: 'Ano de Fabricação',
          align: 'center',
          headerAlign: 'center',
          width: 100,
          valueFormatter: params => {
           if(params.value) return format(new Date(params?.value), 'yyyy')
           else return ''
          }
        },
        {
            field: 'imported',
            headerName: 'Importado ou Não',
            align: 'center',
            headerAlign: 'center',
            width: 300,
            valueFormatter: (params) => {
                return params.value == 1 ? 'Sim' : 'Não'
            }
        },
        {
          field: 'plates',
          headerName: 'Placas',
          align: 'center',
          headerAlign: 'center',
          width: 150
        },
        {
            field: 'selling_price',
            headerName: 'Preço da venda',
            align: 'center',
            headerAlign: 'center',
            width: 200,
            
        },
        {
            field: 'edit',
            headerName: 'Editar',
            headerAlign: 'center',
            align: 'center',
            width: 90,
            renderCell: params => 
                <Link to={'./' + params.id}>
                <IconButton aria-label="Editar">
                    <EditIcon />
                </IconButton>
                </Link>
        },
        {
            field: 'delete',
            headerName: 'Excluir',
            headerAlign: 'center',
            align: 'center',
            width: 90,
            renderCell: params => 
            <IconButton aria-label="Excluir" onClick={() => handleDeleteButtonClick(params.id)}>
                <DeleteForeverIcon color="error" />
            </IconButton>
        }
      ];

    async function handleDeleteButtonClick(id) {
        if(confirm('Deseja realmente excluir este item?')){
            try {
                //faz a chamada ao back-end para excluir o cliente
                const result = await fetch(`https://api.faustocintra.com.br/cars/${id}`, {
                    method: 'DELETE'
                })
                // Se a exclusão tiver sido feita xom sucesso, atualiza a listagem
                if(result.ok) loadData()
                alert('Exclusão efetuada com sucesso!')
            }
            catch(error) {
                console.error(error)
            }
        }
      }

    return (
                // Tamanho da fonte
        <>
            <Typography variant="h1" sx={{mb: '50px' }}> 
                Listagem de carros
            </Typography>

            <Box sx={{
        display: 'flex',
        justifyContent: 'right',
        mb: '25px'  // margin-bottom
      }}>
        <Link to="new">
          <Button 
            variant="contained" 
            color="secondary"
            size="large"
            startIcon={<AddBoxIcon />}
          >
            Cadastrar novo carro
          </Button>
        </Link>
      </Box>
            <Paper elevation={4} sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={cars}
                    columns={columns}
                    initialState={{
                    pagination: {
                        paginationModel: {
                        pageSize: 5,
                        },
                    },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Paper>
        </>
    )
}