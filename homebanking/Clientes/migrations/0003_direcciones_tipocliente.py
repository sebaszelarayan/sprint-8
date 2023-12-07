# Generated by Django 4.2.7 on 2023-11-28 12:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Clientes', '0002_sucursal'),
    ]

    operations = [
        migrations.CreateModel(
            name='Direcciones',
            fields=[
                ('direccion_id', models.AutoField(primary_key=True, serialize=False)),
                ('calle', models.TextField()),
                ('numero', models.IntegerField()),
                ('ciudad', models.TextField()),
                ('provincia', models.TextField()),
                ('pais', models.TextField()),
            ],
            options={
                'db_table': 'direcciones',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='TipoCliente',
            fields=[
                ('tipo_cliente_id', models.AutoField(primary_key=True, serialize=False)),
                ('tipo_name', models.TextField()),
            ],
            options={
                'db_table': 'tipo_cliente',
                'managed': False,
            },
        ),
    ]
